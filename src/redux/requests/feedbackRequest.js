import axios from 'axios';

export function getFeedback(){
    return axios.get('api/place/feedback')
    .then(response => response.data)
    .catch((error) => { throw error; });
}

export function postFeedBackToDataBase(feedback){
    console.log('did we hit request?')
    return axios.post('/api/place/review',feedback)
    .then(response => response.data)
    .catch((error) => { throw error; });
}
