import { put, takeEvery } from 'redux-saga/effects';
import { FEEDBACK_ACTION } from '../actions/FeedBackAction'
import { postFeed, getFeedback, deleteFeedBackDatabase } from '../requests/feedbackRequest'

//good
function* fetchFeedBack(action){
    console.log('feedbackget',action.payload)
    try{
        const feed = yield getFeedback(action);
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
            type:FEEDBACK_ACTION.FETCH_USER,
            payload: action.payload.place_id
        })
    }catch(error){
        console.log('error on post', error)
    }
}


function* deleteFeedBack(action){
    try{
        console.log('did we hit delete on saga', action)
        yield deleteFeedBackDatabase(action.payload.review_id);
        console.log('retriving data after delete');

        yield put({
            type: FEEDBACK_ACTION.FETCH_USER,
            payload: action.payload.place_id

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