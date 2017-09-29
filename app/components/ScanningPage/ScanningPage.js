import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {addQRCode} from '../../actions/QRList';
import api from '../../helpers/api';

class ScanningPage extends Component {
  constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
    this.checkIsProductPriceIsActual = this.checkIsProductPriceIsActual.bind(this);
    this.testCheckIsProductPriceIsActual = this.testCheckIsProductPriceIsActual.bind(this);
  }

  onSuccess(e) {
    if(!this.props.settings.server) {
      Alert.alert("ERROR. You haven`t connected to any server. Please Connect to a server first.");
      return;
    }
    this.props.addQRCode(e.data);
    Alert.alert("QR Data: ", e.data);
    this.checkIsProductPriceIsActual(e.data);
    if(e.data === 'true') Actions.SuccessPage();
    else if(e.data === 'false') Actions.ErrorPage();
    // else Alert.alert("QR Data: ", e.data);
  }

  checkIsProductPriceIsActual(code) {
    let data = code.split(' ');
    console.log('data', data);
    api.getProductData(data[0])
      .then(response => {
        console.log('response', response);
        console.log('data[2] =', data[2], ' response.price =', response.price);
        if(response && response.price && data && data[2] &&  parseFloat(data[2]) === response.price) Actions.SuccessPage();
        else Actions.ErrorPage();
      })
      .catch(err => console.log('Error:', err));
  }

  testCheckIsProductPriceIsActual(code) {
    api.getProductData(code)
      .then(result => console.log('result', result))
      .catch(err => console.log('Error:', err));
  }

  render() {
    const {centerText, textBold, buttonText} = styles;
    console.log('ScanningPage render Redux:', this.props.store);

    StatusBar.setHidden(true, "slide");

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => this.testCheckIsProductPriceIsActual('3785498')}>
          <Text>Get data through api</Text>
        </TouchableOpacity>
        <QRCodeScanner
          onRead={e => this.onSuccess(e)}
          title='Scan Code'
          showMarker
          reactivate
          reactivateTimeout={2500}
          topContent={(
            <Text style={centerText}>
              Go to <Text style={textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR
              code.
            </Text>
          )}
          bottomContent={(
            <Text style={buttonText}>Scan the QR code</Text>
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
