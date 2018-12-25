import { combineReducers } from 'redux';

// import counter from './counter/reducers';
import greeting from './greeting/reducers';

const rootReducer = combineReducers({
  // counter,
  greeting
});

export default rootReducer;
