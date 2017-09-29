import { combineReducers } from "redux";
import QRList from './QRList';
import serverList from './serverList';
import settings from './settings';

const rootReducer = combineReducers({
  QRList,
  serverList,
  settings,
});

export default  rootReducer;