import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import locationSaga from './locationSaga'
import mapSaga from './mapSaga'


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    locationSaga(),
    mapSaga(),
    // watchIncrementAsync()
  ]);
}
