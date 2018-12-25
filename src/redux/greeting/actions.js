import fetchGreeting from '../../mockAPI/greeting';

export const setInitialValue = () => dispatch => {
  fetchGreeting().then(response => {
    dispatch({
      type: 'SET_GREETING_INITIAL_VALUE_SUCCESS',
      value: response.greeting.value || ''
    });
  });
};
