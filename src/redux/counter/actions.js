import fetchCounter from '../../mockAPI/counter';

export const setInitialValue = () => dispatch => {
  fetchCounter().then(response => {
    dispatch({
      type: 'SET_COUNTER_INITIAL_VALUE_SUCCESS',
      value: response.counter.value || 0
    });
  });
};

export const increaseValue = () => (dispatch, getState) => {
  const state = getState();
  const newValue = state.counter.value + 1;

  dispatch({
    type: 'SET_COUNTER_INCREASE_VALUE_SUCCESS',
    value: newValue
  });
};

export const decreaseValue = () => (dispatch, getState) => {
  const state = getState();
  const newValue = state.counter.value - 1;

  dispatch({
    type: 'SET_COUNTER_DECREASE_VALUE_SUCCESS',
    value: newValue < 0 ? 0 : newValue
  });
};
