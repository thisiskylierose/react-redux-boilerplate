import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const storeState = typeof initialState === 'string' ? JSON.parse(initialState) : initialState;
  const appStore = createStore(rootReducer, storeState, applyMiddleware(...middleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;

      appStore.replaceReducer(nextRootReducer);
    });
  }

  return appStore;
};

export default configureStore;
