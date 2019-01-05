import axios from 'axios';

const handleRequest = (route = '', method = 'get', data = {}) =>
  axios({
    data,
    method,
    url: `/api/${route}`,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    responseType: 'json',
    withCredentials: false,
    proxy: {
      host: 'localhost',
      port: process.env.PORT || 3000
    }
  })
    .then(response => response)
    .catch(error => error);

export default handleRequest;
