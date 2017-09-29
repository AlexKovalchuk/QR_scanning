import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {addQRCode} from '../../actions/QRList';
import api from '../../helpers/api';

class ScanningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScanningResult: false,
      product: {
        title: null,
        code: null,
        currentPrice: null,
        serverPrice: null,
      },
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.checkIsProductPriceIsActual = this.checkIsProductPriceIsActual.bind(this);
    this.testCheckIsProductPriceIsActual = this.testCheckIsProductPriceIsActual.bind(this);
  }

  onSuccess(e) {
    if (!this.props.settings.server) {
      Alert.alert("You haven`t connected to any server.");
      return;
    }
    Alert.alert("QR Data: ", e.data);
    this.checkIsProductPriceIsActual(e.data);
  }

  checkIsProductPriceIsActual(code) {
    let data = code.split(' ');
    let product = data[0];
    let server = this.props.settings.server;

    api.getProductData(server, product)
      .then(response => {
        console.log('response', response);
        console.log('data[2] =', data[2], ' response.price =', response.price);
        if (response && response.price && data && data[2] && parseFloat(data[2]) === response.price) {
          let updateProductState = {
            title: response.title,
            code: response.code,
            currentPrice: response.price,
            serverPrice: data[2],
          };
          // this.setState({product: updateProductState, showScanningResult: true});
          Alert.alert("SuccessPage");
          // Actions.SuccessPage();
        }
        else {
          this.props.addQRCode(response);
          Alert.alert("ErrorPage");
          // Actions.ErrorPage();
        }
      })
      .catch(err => console.log('Error:', err));
  }

  testCheckIsProductPriceIsActual(code) {
    api.getProductData(null, code)
      .then(result => console.log('result', result))
      .catch(err => console.log('Error:', err));
  }

  render() {
    const {centerText, textBold, buttonText} = styles;
    console.log('ScanningPage render Redux:', this.props.store);

    StatusBar.setHidden(true, "slide");

    const content = (
      <View style={{flex: 1}}>
        <Text>
          SUCCESS
        </Text>
        <Text>
          {this.state.product.title}
        </Text>
        <Text>
          {this.state.product.code}
        </Text>
        <Text>
          Server price = {this.state.product.serverPrice}
        </Text>
        <Text>
          Current price{this.state.product.currentPrice}
        </Text>
        <TouchableOpacity onPress={() => this.setState({product: productDefault, showScanningResult: false})}>
          <Text style={buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <QRCodeScanner
          onRead={e => this.onSuccess(e)}
          title='Scan Code'
          showMarker
          reactivate
          reactivateTimeout={2500}
          bottomContent={(
            <Text style={buttonText}>
              Scan a code
            </Text>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 7,
    color: '#d00',
  },

  textBold: {
    fontWeight: '500',
    color: '#0d0',
  },

  buttonText: {
    fontSize: 21,
    color: '#00d',
  },
});

const productDefault = {
  title: null,
  code: null,
  currentPrice: null,
  serverPrice: null,
};

const mapStateToProps = store => {
  return {
    store,
    settings: store.settings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addQRCode: code => dispatch(addQRCode(code)),
  };
};

const ScanningPageExport = connect(mapStateToProps, mapDispatchToProps)(ScanningPage);

export default ScanningPageExport;
