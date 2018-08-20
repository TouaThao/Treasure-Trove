import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_LOCATION_ACTION } from '../actions/LocationAction';
import { AddLocation ,RunGeolocation } from '../requests/locationRequests';


function* fetchLocation(action) {
    try {
        const location = yield RunGeolocation(action);
        const body = {
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        longitude: location[0].geometry.location.lng,
        latitude: location[0].geometry.location.lat,
        vendor: action.payload.vendor,
        user_id:action.payload.user_id, 
         }
         yield AddLocation(body);
    } catch (error) {
        console.log(error);
    };
}

function* locationSaga(){

    yield takeEvery(GET_LOCATION_ACTION.ADD,fetchLocation)
}

export default locationSaga;