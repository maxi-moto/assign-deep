'use strict';

const path    = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/assignDeep.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assignDeep.min.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ]
};

module.exports = config;

