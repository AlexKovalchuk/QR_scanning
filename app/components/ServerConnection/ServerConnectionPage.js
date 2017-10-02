import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {addServer, selectServer} from '../../actions/serverList';
import {Actions} from 'react-native-router-flux';
import ScanMessage from '../ScanningPage/ScanMessage';

class ServerConnection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanned: false,
      error: false,
      server: '',
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.clearProductState = this.clearProductState.bind(this);
    this.setScanned = this.setScanned.bind(this);
  }

  onSuccess(e) {
    if (e.data.includes('server:')) {
      let http = e.data.substring('server:'.length, e.data.length);
      this.setState({server: http});
      this.props.selectServer(http);
    }
    this.setScanned(!e.data.includes('server:'));
  }

  setScanned(error = false) {
    this.setState({error, scanned: true});
  }

  clearProductState() {
    this.setState({error: false, scanned: false});
    if(!this.state.error) Actions.pop();
  }

  render() {
    const {buttonText, textMessage} = styles;
    console.log('ServerConnection render Redux:', this.props.store);

    return (
      <View style={{flex: 1}}>
        {
          this.state.scanned &&
          <ScanMessage
            error={this.state.error}
            clear={() => this.clearProductState()}
          >
            {
              this.state.error &&
              <Text style={textMessage}>
                Can`t connect to the server
              </Text> ||
              <Text style={textMessage}>
                Connected to the {this.state.server}
              </Text>
            }
          </ScanMessage> ||
          <QRCodeScanner
            onRead={e => this.onSuccess(e)}
            title='Scan Code'
            bottomContent={(
              <Text style={buttonText}>Connect to the server</Text>
            )}
          />
        }
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
  textMessage: {
    color: '#686868',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
  }
});

const mapStateToProps = store => {
  return {
    store: store
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addServer: server => dispatch(addServer(server)),
    selectServer: server => dispatch(selectServer(server)),
  };
};

const ServerConnectionExport = connect(mapStateToProps, mapDispatchToProps)(ServerConnection);

export default ServerConnectionExport;
