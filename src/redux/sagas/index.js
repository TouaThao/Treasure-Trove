import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import locationSaga from './locationSaga'
import mapSaga from './mapSaga'
import feedBackSaga from './feedbackSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    locationSaga(),
    mapSaga(),
    feedBackSaga(),
    // watchIncrementAsync()
  ]);
}
