import handleRequest from '../handleRequest';

export const setInitialValue = () => async (dispatch, getState) => {
  const { greeting } = getState();

  dispatch({ type: 'GREETING_DATA_FETCH_REQUEST', ...greeting });

  try {
    const response = await handleRequest('greeting');

    if (response.status === 200) {
      dispatch({
        type: 'GREETING_DATA_FETCH_SUCCESS',
        initialFetch: true,
        message: response.data.greeting.message || ''
      });
    }
  } catch (error) {
    console.log(error);
  }
};
