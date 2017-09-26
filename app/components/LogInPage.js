import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class LogInPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('LogInPage render Redux:', this.props.store);
    return(
      <View>
        <Text>
          Here we will be LogIn Page.
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

const LogInPageExport = connect(mapStateToProps, mapDispatchToProps)(LogInPage);

export default LogInPageExport;
