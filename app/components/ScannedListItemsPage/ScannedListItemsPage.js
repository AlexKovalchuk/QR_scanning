import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {changeItemChecked, changeAllItemsChecked, clearQRList} from '../../actions/QRList';
import {Button, CardSection} from '../common';

class ScannedListItemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll: false,
      checked: false,
      checked2: false,
    };

    this.handleSingleChecked = this.handleSingleChecked.bind(this);
    this.handleAllChecked = this.handleAllChecked.bind(this);
  }

  componentWillMount() {
    this.handleAllChecked(false); // set all checkbox to false when component mounted.
  }

  handleSingleChecked(itemCode) {
    console.log('handleSingleChecked', itemCode);
    this.props.changeItemChecked(itemCode);
  }

  handleAllChecked(checkAction) {
    console.log('handleAllChecked', checkAction);
    this.props.changeAllItemsChecked(checkAction);
  }

  render() {
    console.log('ScannedListItemsPage render Redux:', this.props.QRList, ' typeof:', typeof this.props.QRList);


    let list = this.props.QRList.map((item, index) => {
      return (
        <View key={`${index}-${item}`}>
          <View>
            <CheckBox
              icon={{name: 'home', size: 32}}
              title={item.title}
              checked={item.isChecked}
              onPress={() => this.handleSingleChecked(item.code)}
            />
          </View>
        </View>
      )
    });

    const {checkAll, unCheckAll, rowBlock, buttonStyle, textStyle} = styles;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 10}}>
          <Button onPress={() => Actions.PrintScannedItems()}>
            Print checked data
          </Button>
        </View>
        <View style={rowBlock}>
          <Button onPress={() => this.handleAllChecked(true)}>
            <Text style={checkAll}>Check All Items</Text>
          </Button>
          <Button onPress={() => this.handleAllChecked(false)}>
            <Text style={unCheckAll}>Uncheck All Item</Text>
          </Button>
        </View>
        {/*<View>*/}
        <TouchableOpacity
          style={{...buttonStyle, ...{
            borderColor: '#151515',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}}
          onPress={() => this.props.clearQRList()}
        >
          <Text style={{...textStyle, ...{color: '#151515'}}}>Clear QR List</Text>
          <Icon
            type='material'
            name='delete-forever'
            color='#151515'/>
        </TouchableOpacity>
        {/*</View>*/}
        {list}
      </ScrollView>
    )
  }
}

const styles = {
  rowBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  checkAll: {
    fontSize: 18,
    color: 'green',
  },
  unCheckAll: {
    fontSize: 18,
    color: 'red',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const mapStateToProps = store => {
  return {
    QRList: store.QRList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeItemChecked: itemCode => dispatch(changeItemChecked(itemCode)),
    changeAllItemsChecked: checkAction => dispatch(changeAllItemsChecked(checkAction)),
    clearQRList: () => dispatch(clearQRList()),
  };
};

const ScannedListItemsPageExport = connect(mapStateToProps, mapDispatchToProps)(ScannedListItemsPage);

export default ScannedListItemsPageExport;
