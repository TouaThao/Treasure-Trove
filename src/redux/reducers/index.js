import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import map from './locationReducer'

const store = combineReducers({
  user,
  login,
  map,
});

export default store;
