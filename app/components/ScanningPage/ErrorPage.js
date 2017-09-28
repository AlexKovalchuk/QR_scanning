import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ErrorPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {errorText} = this.props;
    return(
      <View>
        <Text>
          {errorText  || 'Here Will be your error message.'}
        </Text>
      </View>
    );
  }
}

export default ErrorPage;