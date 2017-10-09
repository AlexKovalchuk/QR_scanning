import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class PrintScannedItems extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('PrintScannedItems render redux:', this.props.QRList);
    const {textMessage, separator, textBlock, container} = styles;
    let printData = this.props.QRList.map((item, index) => {
      if(!item.isChecked) return null;
      return (
        <View
          key={`print-${item.code}-${index}`}
          style={textBlock}
        >
          <Text style={textMessage}>
            title: {item.title}
          </Text>
          <Text style={textMessage}>
            code: {item.code}
          </Text>
          <Text style={textMessage}>
            server price: {item.price}
          </Text>
          {/*<View style={separator}/>*/}
        </View>
      )
    });

    return (
      <ScrollView style={container}>
        {printData}
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  textBlock: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#151515',
    margin: '2%',
    marginBottom: 0,
  },
  buttonText: {
    fontSize: 21,
    color: '#00d',
  },
  textMessage: {
    color: '#151515',
    fontSize: 20,
    marginLeft: '2%',
    marginRight: '2%',
  },
  separator: {
    flex: 1,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'black',
    // borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

};

const mapStateToProps = store => {
  return {
    QRList: store.QRList,
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const PrintScannedItemsExport = connect(mapStateToProps, mapDispatchToProps)(PrintScannedItems)

export default PrintScannedItemsExport;
