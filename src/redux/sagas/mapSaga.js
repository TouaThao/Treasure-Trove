import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_MAP } from '../actions/MapAction';
import { runGetLatLong } from '../requests/locationRequests';


function* fetchMap() {
    try {
        console.log('did we get this in fetchmap??')
        let getMap = yield runGetLatLong();
        yield put ({
            type: GET_MAP.SET,
            payload: getMap
        })
    } catch (error) {
        console.log(error);
    };
}

function* MapSaga(){
    console.log('We need location');
    yield takeEvery(GET_MAP.GET,fetchMap)
}

export default MapSaga;