import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';

import template from './src/template';
import config from './config/webpack.client.hot';
import fetchGreeting from './src/mockAPI/greeting';

require('dotenv').config();

const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

app.get('/api/:route', async (req, res) => {
  // console.log('req.params.route', req.params.route);
  try {
    const result = await fetchGreeting();
    res.send(result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.send(error);
  }
});

app.get('*', (req, res) => {
  res.send(
    template({
      body: 'Hello World',
      title: 'React & Redux boilerplate'
    })
  );
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
