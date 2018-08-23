import { put,  takeLatest } from 'redux-saga/effects';
import { USER_ACTIONS } from '../actions/userActions';
import { callUser, callUserUpdate } from '../requests/userRequests';
// import { func } from 'prop-types';
// import Axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    yield put({ type: USER_ACTIONS.REQUEST_START });
    const user = yield callUser();
    yield put({
      type: USER_ACTIONS.SET_USER,
      user,
    });
    yield put({
      type: USER_ACTIONS.REQUEST_DONE,
    });
  } catch (error) {
    yield put({
      type: USER_ACTIONS.REQUEST_DONE,
    });
    yield put({
      type: USER_ACTIONS.USER_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    });
  }
}


// function* fetchUpdateUser(action){
//   try{
//       console.log('did we get to update user?', action)
//       yield fetchUpdateUser(action.payload);
//       const getUpdateUser = yield callUser();
//       yield put({
//           type: USER_ACTIONS.SETUPDATE,
//               getUpdateUser
//       })
//   } catch(error){
//       console.log('error',error)
//   }
  
// }



/*
  Starts fetchUser on each dispatched `FETCH_USER` action.
  Allows concurrent fetches of user.
*/
// function* userSaga() {
//   yield takeEvery('FETCH_USER', fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_USER" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userSaga() {
  yield takeLatest(USER_ACTIONS.FETCH_USER, fetchUser); 
  // yield takeLatest(USER_ACTIONS.ADD_FEEDBACK, fetchUpdateUser); 
}


export default userSaga;
