import { put,takeEvery } from 'redux-saga/effects';
import { GET_LOCATION_ACTION } from '../actions/LocationAction';
import { AddLocation ,RunGeolocation,fetchUserStore } from '../requests/locationRequests';
import { callUser } from '../requests/userRequests';


function* fetchLocation(action) {
    console.log('icioasj',action)
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
         console.log('ansoid',body)
         yield AddLocation(body);
    } catch (error) {
        console.log(error);
    };
}

function* fetchStore(){
    // console.log('store',action)
    try{
        const user = yield callUser();
        // console.log('------asdasd----',user);
        const data = yield fetchUserStore(user.id);
        // console.log('------asdasd----',data);
        yield put({
            type: GET_LOCATION_ACTION.SET_STORE,
            payload: data
        })
    }catch(error){
        console.log('error',error)
    }

}




function* locationSaga(){
    yield takeEvery(GET_LOCATION_ACTION.ADD,fetchLocation)
    yield takeEvery(GET_LOCATION_ACTION.GET_STORE,fetchStore)
}

export default locationSaga;