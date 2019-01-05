import express from 'express';
import bodyParser from 'body-parser';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';

import template from './template';
import getDataLoaders from './getDataLoaders';
import appRoutes from '../routes';
import AppComponent from '../components/App';

import fetchGreeting from '../mockAPI/greeting';
import configureStore from '../redux/configureStore';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const basePath = `http://localhost:${port}`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('www'));
app.use('/data', express.static('data'));

app.get('/api/:route', async (req, res) => {
  // console.log('req.params.route', req.params.route);
  try {
    const result = await fetchGreeting();
    // console.log(result);
    res.send(result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.send(error);
  }
});

app.get('*', async (req, res) => {
  const cleanURL = req.url === '/' ? req.url : req.url.replace(/(\/)$/, '');
  const route = appRoutes.find(appRoute => appRoute.path === cleanURL);

  if (route) {
    try {
      const result = await fetchGreeting();
      const appStore = configureStore(JSON.stringify(result));
      const appState = appStore.getState();
      const initialState = JSON.stringify(appState).replace(/</g, '\\x3c');
      const staticContext = {};

      const htmlMarkup = ReactDOM.renderToString(
        <Provider store={appStore}>
          <Router location={req.url} context={staticContext}>
            <AppComponent />
          </Router>
        </Provider>
      );

      res.status(200).send(
        template({
          title: 'React & Redux boilerplate',
          base: basePath,
          body: htmlMarkup,
          state: initialState
        })
      );
    } catch (error) {
      res.status(500).send(
        template({
          title: 'React & Redux boilerplate',
          base: basePath,
          body: 'There was an error'
        })
      );
    }
  } else {
    res.status(404).send(
      template({
        title: 'React & Redux boilerplate',
        base: basePath,
        body: 'No matching route'
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
    console.log(`Listening at: ${basePath}`);
  }
});
