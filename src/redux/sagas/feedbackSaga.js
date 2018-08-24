import { put, takeEvery } from 'redux-saga/effects';
import { FEEDBACK_ACTION } from '../actions/FeedBackAction'
import { USER_ACTIONS } from '../actions/userActions'
import { postFeed, getFeedback, deleteFeedBackDatabase } from '../requests/feedbackRequest'

//good
function* fetchFeedBack(){
    try{
        const feed = yield getFeedback();
        yield put({
            type: FEEDBACK_ACTION.SET_USER,
            payload:feed
        })
    }catch(error){
        console.log('got error on feedback GET Route',error)
    }
}

//good
function* postFeedBack(action){
    try{

        yield postFeed(action.payload);
        yield put({
            type:FEEDBACK_ACTION.FETCH_USER 
        })
    }catch(error){
        console.log('error on post', error)
    }
}


function* deleteFeedBack(action){
    console.log('did we hit delete', action)
    try{
        yield deleteFeedBackDatabase(action.payload);
        yield put({
            type: FEEDBACK_ACTION.FETCH_USER
        })
    }catch(error){
        console.log('error', error)
    }
}

function* feedbackSaga(){
    yield takeEvery(FEEDBACK_ACTION.FETCH_USER ,fetchFeedBack )
    yield takeEvery(FEEDBACK_ACTION.POST, postFeedBack)
    yield takeEvery(FEEDBACK_ACTION.DELETE,deleteFeedBack)
}

export default feedbackSaga