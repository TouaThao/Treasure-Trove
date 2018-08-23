import { put, takeEvery } from 'redux-saga/effects';
import { FEEDBACK_ACTION } from '../actions/FeedBackAction'
import { USER_ACTIONS } from '../actions/userActions'
import { postFeedBackToDataBase, getFeedback } from '../requests/feedbackRequest'


function* fetchFeedBack(){
    try{
        const feedback= yield getFeedback()
        yield put({
            type: FEEDBACK_ACTION.SET,
            payload: feedback
        });
    }catch(error){
        console.log('got error on feedback GET Route',error)
    }
}


// function* postFeedBack(action) {

//     try {
//         yield put({
//             type: USER_ACTIONS.ADD_FEEDBACK,
//             payload: action.payload
//         });
//         yield addFavoriteToDatabase(action);
//         const user = yield getFavorite();
//         console.log('getting update user:',user);
//         yield put({
//             type: USER_ACTIONS.SET_FAVORITES,
//             user
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

// function* deleteFeedBack(action){
//     console.log('did we hit delete', action)
//     try{
//         yield deleteFeedBackDatabase(action.payload)
//         const feedback = yield get
//     }
// }

function* feedbackSaga(){
    yield takeEvery(FEEDBACK_ACTION.GET ,fetchFeedBack )
    // yield takeEvery(FEEDBACK_ACTION.ADD,postFeedBack)
    // yield takeEvery(FEEDBACK_ACTION.DELETE,deleteFeedBack)
}

export default feedbackSaga