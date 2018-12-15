require('dotenv').config();

const express = require('express');
const webpack = require('webpack');
// const React = require('react');
// const ReactDOM = require('react-dom/server');

const port = process.env.PORT || 3000;
const template = require('./template');
const config = require('../config/webpack.client.hot');

const compiler = webpack(config);
const app = express();

app.use('/', express.static('www'));
app.use('/data', express.static('data'));

app.use(
  // eslint-disable-next-line global-require
  require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath
  })
);
// eslint-disable-next-line global-require
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.send(
    template({
      body: 'Hello World',
      title: 'React & Redux boilerplate'
    })
  );
});

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Listening at: http://localhost:${port}`);
  }
});
