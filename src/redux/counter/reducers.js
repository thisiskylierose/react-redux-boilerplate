import { combineReducers } from 'redux';

const value = (state = 0, action) => {
  switch (action.type) {
    case 'SET_COUNTER_INITIAL_VALUE_SUCCESS':
    case 'SET_COUNTER_INCREASE_VALUE_SUCCESS':
    case 'SET_COUNTER_DECREASE_VALUE_SUCCESS':
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  value
});
