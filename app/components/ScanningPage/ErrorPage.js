import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ErrorPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {errorText} = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.errorMessage}>ERROR</Text>
        <Text style={styles.errorMessage}>
          {errorText  || 'The checked product price is unequal with current server price of the product.'}
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
    backgroundColor: '#d00',
  },
  errorMessage: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  error: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  }
};

export default ErrorPage;