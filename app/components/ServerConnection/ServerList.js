import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {selectServer} from '../../actions/serverList';

class ServerListPage extends Component {
  constructor(props) {
    super(props);

    this.connectServer = this.connectServer.bind(this);
  }

  connectServer(server) {
    console.log('server sellection', server);
    this.props.selectServer(server);
  }

  render() {
    console.log('ServerList render Redux:', this.props.store);
    let list = this.props.serverList.map((server, index) => {
      return (
        <View key={`${index}-${server}`}>
          <TouchableOpacity onPress={() => this.connectServer(server)}>
            <Text style={styles.serverItem}>
              {server}
            </Text>
          </TouchableOpacity>
        </View>
      )
    });

    return (
      <View style={{flex: 1}}>
        {list}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  serverItem: {
    fontSize: 25,
    textAlign: 'center',
    color: '#686868',
  }
};

const mapStateToProps = store => {
  return {
    serverList: store.serverList,
    store,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectServer: server => dispatch(selectServer(server)),
  };
};

const ServerListPageExport = connect(mapStateToProps, mapDispatchToProps)(ServerListPage);

export default ServerListPageExport;
