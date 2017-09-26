import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class ScannedListItemsPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('ScannedListItemsPage render Redux:', this.props.store);
    return(
      <View>
        <Text>
          Here we will be Scanned List Items...
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

const ScannedListItemsPageExport = connect(mapStateToProps, mapDispatchToProps)(ScannedListItemsPage);

export default ScannedListItemsPageExport;
