// import { put, takeEvery } from 'redux-saga/effects';
// import { GET_NEWUPDATEINFO } from '../actions/UpdateUserAction';
// import { UpdateUser, callUser } from '../requests/userRequests';
// import { USER_ACTIONS } from '../actions/userActions';



// function* fetchUpdateUser(action){
//     try{
//         console.log('did we get to update user?', action)
//         yield UpdateUser(action.payload);
//         const getUpdateUser = yield callUser();
//         yield put({
//             type: USER_ACTIONS.SETUPDATE,
//                 getUpdateUser
//         })
//     } catch(error){
//         console.log('error',error)
//     }
    
// }

// function* updateUserSaga(){
//     yield takeEvery(GET_NEWUPDATEINFO.GET,fetchUpdateUser)
// }

// export default updateUserSaga