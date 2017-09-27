import React, {Component} from 'react';
import {View, Text, Linking, Alert, Dimensions, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanningPage extends Component {
  constructor(props) {
    super(props);

  }

  onSuccess(e) {
    console.log('e =>', e);
    Alert.alert("QR Data: ", e.data);
    Linking.openURL(e.data).catch(err => console.error('An error occured', err));
  }

  render() {
    const { centerText, textBold, buttonText, buttonTouchable } = styles;

    console.log('ScanningPage render Redux:', this.props.store);
    return(
      <View style={{flex: 1}}>
        {/*<Text>*/}
          {/*You can scan your QR-code.*/}
        {/*</Text>*/}
        <QRCodeScanner
          title='Scan Code'
          topContent={(
            <Text style={centerText}>Top of the QR code scanner</Text>
          )}
          cameraStyle={{height: Dimensions.get("window").height}}
          showMarker
          bottomContent={(
            <Text style={buttonText}>Scan the QR code</Text>
          )}
          onRead={this.onSuccess.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});

const mapStateToProps = store => {
  return {
    store: store
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ScanningPageExport = connect(mapStateToProps, mapDispatchToProps)(ScanningPage);

export default ScanningPageExport;
