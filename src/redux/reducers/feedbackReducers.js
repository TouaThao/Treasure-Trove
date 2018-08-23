import { combineReducers } from 'redux';

//feedback action

import { USER_ACTIONS } from '../actions/userActions';

const review = (state = [], action)=>{
    switch(action.type){
        case USER_ACTIONS.SET_USER:
        return action.user.review || state;
        default:
        return state;
    }
};


export default combineReducers ({
    review

})