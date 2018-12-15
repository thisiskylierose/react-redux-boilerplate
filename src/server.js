import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import template from './template';
import App from './components/App';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('www'));
app.use('/data', express.static('data'));

app.get('*', (req, res) => {
  const htmlMarkup = ReactDOM.renderToString(<App />);

  res.send(
    template({
      body: htmlMarkup,
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
