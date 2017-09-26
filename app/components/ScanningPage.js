import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class ScanningPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('ScanningPage render Redux:', this.props.store);
    return(
      <View>
        <Text>
          Here we will be scanning QR code and write it to the Redux!!!
        </Text>
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
