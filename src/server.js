require('dotenv').config();

const express = require('express');
const webpack = require('webpack');
// const React = require('react');
// const ReactDOM = require('react-dom/server');

const app = express();
const port = process.env.PORT || 3000;
const template = require('./template');

app.use('/', express.static('www'));
app.use('/data', express.static('data'));

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
