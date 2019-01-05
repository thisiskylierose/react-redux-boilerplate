require('dotenv').config();

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  target: 'node',
  entry: [path.join(process.cwd(), 'src/server/express.www.js')],
  output: {
    path: path.join(process.cwd(), 'www'),
    filename: 'server.bundle.js'
  },
  externals: fs
    .readdirSync(path.resolve(process.cwd(), 'node_modules'))
    .concat(['react-dom/server', 'react/addons'])
    .reduce((ext, mod) => {
      const external = ext;
      external[mod] = `commonjs ${mod}`;
      return external;
    }, {}),
  resolve: {
    modules: ['node_modules', path.join(process.cwd(), 'src')],
    extensions: ['.js', '.json']
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   debug: true
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(process.cwd(), 'src')
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   options: {
      //     useEslintrc: true,
      //     failOnWarning: false,
      //     failOnError: true,
      //     fix: true
      //   }
      // },
      {
        // TODO: try this option
        // https://www.jonathan-petitcolas.com/2017/02/23/different-babel-configuration-with-single-babelrc-file-using-babelenv.html
        test: /\.css/,
        use: [
          { loader: 'isomorphic-style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(process.cwd(), 'config/postcss.config.js')
              }
            }
          }
        ]
        // use: [
        //   'isomorphic-style-loader',
        //   'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
        //   'postcss-loader?path=config/postcss.dev.js'
        // ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'null-loader'
      }
    ]
  }
};
