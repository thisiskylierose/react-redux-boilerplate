import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './redux/configureStore';
import AppComponent from './components/App';

const initialState = window.__API__;
const appStore = configureStore(initialState);

const render = Component => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <Provider store={appStore}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

render(AppComponent);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextComponent = require('./components/App').default;

    render(NextComponent);
  });
}
