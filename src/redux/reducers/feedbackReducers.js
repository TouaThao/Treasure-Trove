import { combineReducers } from 'redux';

//feedback action

import {FEEDBACK_ACTION} from '../actions/FeedBackAction'

const review = (state = [], action)=>{
    console.log('did we hit reducer', action)
    switch(action.type){
        case FEEDBACK_ACTION.SET_USER:
            return action.payload
        default:
        return state;
    }
};


export default combineReducers ({
    review
})