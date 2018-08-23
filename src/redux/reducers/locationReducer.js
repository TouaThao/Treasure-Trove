import { combineReducers } from 'redux';
//location action
import { GET_LOCATION_ACTION } from '../actions/LocationAction'
//map action
import { GET_MAP } from '../actions/MapAction';


const location = (state =[], action) =>{
    switch (action.type){
        case GET_LOCATION_ACTION.SET:
        return action.payload 
        default:
        return state
    }
}

const mapLocation = ( state = [], action )=>{
    switch(action.type){
        case GET_MAP.SET:
        return action.payload
        default:
        return state
    }
}

// const filterSearch = (state = [], action )=>{
//     switch(action.type){
//         case GET_LOCATION_ACTION.UPDATE:
//         return action.payload
//         default:
//         return state
//     }
// }

export default combineReducers ({
    location,
    mapLocation,
    // filterSearch,
})

