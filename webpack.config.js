const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    home: './src/js/home.js',
    privacy: './src/js/privacy.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      },
      {test: /\.pug$/, loader: 'pug-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml'},
      {test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin(
      [
        {from: "src/img/", to: "img/"}
      ]
    ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      inject: 'head',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy.html',
      template: 'src/privacy.pug',
      inject: 'head',
      chunks: ['home', 'privacy']
    })
  ]
};
