var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log("=======================> BUILDING FOR ENV:", process.env.NODE_ENV);

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client',
    './app'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/app.css"),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, '/')
        //query: {
        //  optional: ['runtime'],
        //  plugins: [
        //    'react-display-name',
        //    'react-transform'
        //  ],
        //  extra: {
        //    'react-transform': [{
        //      'target': 'react-transform-hmr',
        //      'imports': ['react'],
        //      'locals': ['module']
        //    }]
        //  }
        //}
      },
      {
        test: /\.scss$/,
        loaders:[
          "style",
          "css?sourceMap",
          "autoprefixer-loader?browsers=last 2 version",
          "sass?sourceMap&outputStyle=expanded"
        ]
      },
      //{ test: /\.(svg|woff2)$/, loader: 'url-loader?limit=100000' },
      { test: /\.svg$/, loaders: [
          'svg-inline'
      ]
      }
    ]
  }};
