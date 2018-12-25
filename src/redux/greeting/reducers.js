import { combineReducers } from 'redux';

const value = (state = '', action) => {
  switch (action.type) {
    case 'SET_GREETING_INITIAL_VALUE_SUCCESS':
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  value
});
