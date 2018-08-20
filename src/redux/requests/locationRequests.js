import axios from 'axios';
//This is good
export function AddLocation( action ){
    console.log('addlocation', action)
    return axios.post('/api/place/location',action)
    .then(response => response.data)
    .catch((error) => { throw error; });
}
//This is good
export function RunGeolocation( action ) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${action.payload.address},${action.payload.city}&key=AIzaSyD9e9e4rYBfPVZsPiKNBvQ8Ciu5yGPlfq8`
      return axios.get(url)
      .then(response => response.data.results)
      .catch((error) => { throw error; });

}
//
export function runGetLatLong(){
    return axios.get('/api/place/address')
    .then(response => response.data)
    .catch((error) => { throw error; });
}

