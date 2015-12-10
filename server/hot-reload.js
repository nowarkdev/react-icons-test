const express = require('express');
const server = express();
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false, publicPath: webpackConfig.output.publicPath
}));

server.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, // eslint-disable-line
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

module.exports = server;
