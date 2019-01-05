import { combineReducers } from 'redux';

const initialState = {
  initialFetch: false,
  fetchError: false,
  message: ''
};

const initialFetch = (state = initialState.initialFetch, action) => {
  switch (action.type) {
    case 'GREETING_DATA_FETCH_REQUEST':
    case 'GREETING_DATA_FETCH_SUCCESS':
      return action.initialFetch;
    default:
      return state;
  }
};

const message = (state = initialState.message, action) => {
  switch (action.type) {
    case 'GREETING_DATA_FETCH_SUCCESS':
      return action.message;
    default:
      return state;
  }
};

export default combineReducers({
  initialFetch,
  message
});
