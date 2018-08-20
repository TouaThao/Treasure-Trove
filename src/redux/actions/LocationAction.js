export const GET_LOCATION_ACTION ={
    GET: 'GET_LOCATION',
    ADD: 'ADD_LOCATION',
    DELETE: 'DELETE_LOCATION',
    SET: 'SET_LOCATION',
};


// This does nothing for now until we want to show map to owener
export function getLocation(){
    return{ type: GET_LOCATION_ACTION.GET}
}