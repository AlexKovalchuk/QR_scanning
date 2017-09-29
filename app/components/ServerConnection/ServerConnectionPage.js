import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {addServer} from '../../actions/serverList';
class ServerConnection extends Component {
  constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(e){
    Alert.alert("QR Server: ", e.data);
    this.props.addServer(e.data);
  }

  render() {
    const {centerText, textBold, buttonText} = styles;
    console.log('ServerConnection render Redux:', this.props.store);

    return (
      <View style={{flex: 1}}>
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
    );
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
    store: store
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addServer: server => dispatch(addServer(server)),
  };
};

const ServerConnectionExport = connect(mapStateToProps, mapDispatchToProps)(ServerConnection);

export default ServerConnectionExport;
