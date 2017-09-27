import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';
import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanningPage extends Component {
  constructor(props) {
    super(props);

  }

  onSuccess(e) {
    console.log('e=>', e);
    Linking.openURL(e.data).catch(err => console.error('An error occured', err));
  }

  render() {
    console.log('ScanningPage render Redux:', this.props.store);
    return(
      <View>
        <Text>
          Here we will be scanning QR code and write it to the Redux!!!
        </Text>
        <QRCodeScanner onRead={this.onSuccess.bind(this)}/>
      </View>
    )
  }
}

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
