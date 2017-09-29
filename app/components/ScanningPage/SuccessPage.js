import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SuccessPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {successText} = this.props;
    const {container, successMessage} = styles;
    return(
      <View style={container}>
        <Text style={successMessage}>
          {successText  || 'Checked product price is equal with server price of the product.'}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  successMessage: {
    fontSize: 25,
    textAlign: 'center',
    color: '#686868',
  }
};

export default SuccessPage;
