const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    path.join(process.cwd(), 'src/index.js')
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'scripts/bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    modules: ['node_modules', path.join(process.cwd(), 'src')],
    extensions: ['.js', '.json']
  },
  plugins: [new webpack.HotModuleReplacementPlugin({ multiStep: true })],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(process.cwd(), 'src')
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
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
