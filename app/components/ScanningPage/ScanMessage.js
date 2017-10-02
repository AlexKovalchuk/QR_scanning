import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'

class ScanMessage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {container, buttonText, image, textMessage} = styles;
    return (
      <View style={container}>
        <Image
          style={image}
          source={this.props.error ?
            require('../../utils/images/cancel.png') :
            require('../../utils/images/checked2.png')
          }
        />
        {this.props.children}
        <TouchableOpacity onPress={() => this.props.clear()}>
          <Text style={buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 25,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  textMessage: {
    color: '#686868',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
  }
};

export default ScanMessage;