require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  entry: [path.join(process.cwd(), 'src/client.js')],
  output: {
    path: path.join(process.cwd(), 'www'),
    filename: 'assets/scripts/bundle.js',
    chunkFilename: 'assets/scripts/[id].css',
    publicPath: '/assets/'
  },
  resolve: {
    modules: ['node_modules', path.join(process.cwd(), 'src')],
    extensions: ['.js', '.json']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/bundle.css',
      chunkFilename: 'assets/styles/[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(process.cwd(), 'src')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
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
                path: path.join(process.cwd(), 'config/postcss.config.js'),
                ctx: {
                  cssnano: {}
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
