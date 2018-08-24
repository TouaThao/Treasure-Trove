import axios from 'axios';

export function getFeedback(){
    return axios.get('/api/place/feedback')
    .then(response => response.data)
    .catch((error) => { throw error; });
}

export function postFeed(feedback){
    return axios.post('/api/place/review',feedback)
    .then(response => response.data)
    .catch((error) => { throw error; });
}

export function deleteFeedBackDatabase(action){
    console.log('did we get to request delete', action)
    return axios.delete(`/api/place/${action}`)
    .then(response => response.data)
    .catch((error) => { throw error; });

}