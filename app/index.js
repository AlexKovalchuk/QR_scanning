import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from "react-redux";
import thunk from "redux-thunk";
import {Router} from 'react-native-router-flux';
import navigator from './config/routes';
import rootReducer from './reducers/index';

const ReduxRouter = connect((state) => ({state: state.route}))(Router);
// it is important to load reducers AFTER actions.create (so no import here)
// const reducers = require('./reducers/index').default;

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
        <ReduxRouter navigator={navigator}/>
      </Provider>
    );
  }
}

export default App;
