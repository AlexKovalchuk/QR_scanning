import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class ScannedListItemsPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('ScannedListItemsPage render Redux:', this.props.QRList);
    let list = this.props.QRList.map((item, index )=> {
      return (
        <View key={`${index}-${item}`}>
          <Text>
            {item}
          </Text>
        </View>
      )
    });

    return(
      <View style={{flex: 1}}>
          {list}
      </View>
    )
  }
}

const mapStateToProps = store => {
  return {
    QRList: store.QRList,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ScannedListItemsPageExport = connect(mapStateToProps, mapDispatchToProps)(ScannedListItemsPage);

export default ScannedListItemsPageExport;
