export const GET_MAP ={
    GET: 'GET_MAP',
    ADD: 'ADD_MAP',
    DELETE: 'DELETE_MAP',
    SET: 'SET_MAP',
};

export function getLocation(){
    return{ type: GET_MAP.GET}
}