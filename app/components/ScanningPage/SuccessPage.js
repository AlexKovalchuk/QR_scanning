import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SuccessPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {successText} = this.props;
    return(
      <View>
        <Text>
          {successText  || 'Here Will be your success message.'}
        </Text>
      </View>
    );
  }
}

export default SuccessPage;
