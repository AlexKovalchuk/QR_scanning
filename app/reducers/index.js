import { combineReducers } from "redux";
import ListReducer from './ListReducer';

import routeReducer from './route-reducer';
import reducer from './a-reducer';

// export default combineReducers({
//   route: routeReducer,
//   reducer,
// });
const rootReducer = combineReducers({
  ListReducer,
});

export default  rootReducer;