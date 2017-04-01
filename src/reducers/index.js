import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import saveLogin from './saveLogin';
import saveUserRole from './saveUserRole';
import saveParks from './saveParks';

const rootReducer = combineReducers({
  saveLogin,saveUserRole,saveParks, routing: routerReducer
});

export default rootReducer;
