import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import map from './locationReducer';
import feedback from './feedbackReducers'

const store = combineReducers({
  user,
  login,
  feedback,
  map,
});

export default store;
