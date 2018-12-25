import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';

import template from './template';
import App from './components/App';

import fetchGreeting from './mockAPI/greeting';
import configureStore from './redux/configureStore';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('www'));
app.use('/data', express.static('data'));

app.get('*', async (req, res) => {
  try {
    const result = await fetchGreeting();
    const appStore = configureStore(JSON.stringify(result));
    const appState = appStore.getState();
    const initialState = JSON.stringify(appState).replace(/</g, '\\x3c');

    const htmlMarkup = ReactDOM.renderToString(
      <Provider store={appStore}>
        <App />
      </Provider>
    );

    res.send(
      template({
        body: htmlMarkup,
        title: 'React & Redux boilerplate',
        state: initialState
      })
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    res.send(
      template({
        body: 'There was an error',
        title: 'React & Redux boilerplate'
      })
    );
  }
});

app.listen(port, err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Listening at: http://localhost:${port}`);
  }
});
