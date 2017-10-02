import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {addQRCode} from '../../actions/QRList';
import api from '../../helpers/api';
import ScanMessage from './ScanMessage';

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
        error: false,
      },
      isConnectionError: false,
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.checkIsProductPriceIsActual = this.checkIsProductPriceIsActual.bind(this);
    this.clearProductState = this.clearProductState.bind(this);
    this.setProductState = this.setProductState.bind(this);
  }

  onSuccess(e) {

    if (!this.props.settings.server) {
      this.setState({isConnectionError: true});
      // Alert.alert("You haven`t connected to any server.");
      return;
    }
    // Alert.alert("QR Data: ", e.data);
    this.checkIsProductPriceIsActual(e.data);
  }

  checkIsProductPriceIsActual(code = '1742120  32.19') {
    // console.log('code:', code);
    let data = code.split(' ');
    let product = data[0];
    let server = this.props.settings.server;

    api.getProductData(server, product)
      .then(response => {
        // console.log('response', response);
        // console.log('data =', data, ' response.price =', response.price);
        if (response && response.price && data && data[2] && parseFloat(data[2]) === response.price) {
          this.setProductState(response.title, response.code, response.price, data[2]);
        }
        else {
          this.props.addQRCode(response);
          this.setProductState(response.title, response.code, response.price, data[2], true);
        }
      })
      .catch(err => console.log('Error:', err));
  }

  setProductState(title, code, serverPrice, currentPrice, error = false) {
    let updateProductState = {
      title,
      code,
      currentPrice,
      serverPrice,
      error,
    };
    this.setState({product: updateProductState, showScanningResult: true});
  }

  clearProductState() {
    console.log('clearProductState Clicked!');
    this.setState({product: productDefault, showScanningResult: false, isConnectionError: false})
  }

  render() {
    const {centerText, textBold, buttonText, textMessage} = styles;
    console.log('ScanningPage render Redux:', this.props.store);

    StatusBar.setHidden(true, "slide");
    return (
      <View style={{flex: 1}}>
        {
          this.state.showScanningResult &&
          <ScanMessage
            error={this.state.product.error}
            clear={() => this.clearProductState()}
          >
            <Text style={textMessage}>
              title product: {this.state.product.title || null}
            </Text>
            <Text style={textMessage}>
              code: {this.state.product.code || null}
            </Text>
            <Text style={textMessage}>
              Server price = {this.state.product.serverPrice || null}
            </Text>
            <Text style={textMessage}>
              Current price = {this.state.product.currentPrice || null}
            </Text>
          </ScanMessage> ||
          this.state.isConnectionError &&
          <ScanMessage
            error={this.state.isConnectionError}
            clear={() => Actions.pop()}
          >
            <Text style={textMessage}>
              You Haven`t connected to the server!
            </Text>
          </ScanMessage> ||
          <QRCodeScanner
            onRead={e => this.onSuccess(e)}
            title='Scan Code'

            bottomContent={(
              <Text style={buttonText} onPress={() => this.checkIsProductPriceIsActual()}>
                Scan a code
              </Text>
            )}
          />
        }
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
  textMessage: {
    color: '#686868',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
  }
});

const productDefault = {
  title: null,
  code: null,
  currentPrice: null,
  serverPrice: null,
  error: false,
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
