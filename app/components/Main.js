import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {CardSection, Button} from "./common";
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ScanningPage from './ScanningPage';
import ScannedListItemsPage from './ScannedListItemsPage';
import LogInPage from './LogInPage';

class Main extends Component {
  constructor(props) {
    super(props);

    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(key) {
    console.log('handleNavigation navigation', key);
    Actions[key]();
  }

  getPageList() {
    const pageArr = [
      {title: 'Scan QR-code', pageLink: 'ScanningPage'},
      {title: 'Scanned items', pageLink: 'ScannedListItemsPage'},
      {title: 'Log In', pageLink: 'LogInPage'},
    ];

    const pageList = pageArr.map(page => {
      // console.log('Main render Redux:', this.props.store);
      return (
        <CardSection key={page.pageLink}>
          <Button onPress={() => this.handleNavigation(page.pageLink)}>
            {page.title}
          </Button>
        </CardSection>
      )
    });

    return pageList;
  }

  render() {
    const {container} = styles;

    return (
        <View style={container}>
          {this.getPageList()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = store => {
  return {
    store: store
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MainExport = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainExport;
