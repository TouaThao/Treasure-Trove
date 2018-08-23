import axios from 'axios';

export function callUser() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get('/api/user', config)
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function callUserUpdate(action){
  console.log('Now we in request', action)
  return axios.put(`/api/user/${action[0]}`,action[1])
  .then(response => response.data)
  .catch((error) => { throw error; });
}


export function placeholder() {
}
