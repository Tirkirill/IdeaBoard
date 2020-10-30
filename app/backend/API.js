var endpoint = 'http://localhost:3000/';
const axios = require('axios');

export function fetchUsersByEmail(email) {
    return fetch(endpoint+'users?email='+email, {"method":"GET"})
}

export function createNewUser(user) {
    return axios.post('http://localhost:3000/users', user);
}