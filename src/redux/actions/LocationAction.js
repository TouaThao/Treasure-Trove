export const GET_LOCATION_ACTION ={
    GET: 'GET_LOCATION',
    ADD: 'ADD_LOCATION',
    DELETE: 'DELETE_LOCATION',
    GET_STORE:'LOCATION_GET_STORE',
    SET_STORE:'SET_STORE',
    SET: 'SET_LOCATION',
    UPDATE: 'UPDATE_NEWLOCATION'
};


// This does nothing for now until we want to show map to owener
export function getLocation(){
    return{ type: GET_LOCATION_ACTION.GET}
}

// export function getUserStore(){
//     return{ type: GET_LOCATION_ACTION.GET_STORE}
// }


