import axios from 'axios';

// import fetchGreeting from '../../mockAPI/greeting';

export const setInitialValue = () => dispatch => {
  axios({
    url: '/api/greeting',
    method: 'get',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    responseType: 'json',
    data: {},
    withCredentials: false,
    proxy: {
      host: 'localhost',
      port: process.env.PORT || 3000
    }
  })
    .then(({ data }) => {
      dispatch({
        type: 'SET_GREETING_INITIAL_VALUE_SUCCESS',
        value: data.greeting.value || ''
      });
    })
    .catch(error => error);

  // fetchGreeting().then(response => {
  //   dispatch({
  //     type: 'SET_GREETING_INITIAL_VALUE_SUCCESS',
  //     value: response.greeting.value || ''
  //   });
  // });
};
