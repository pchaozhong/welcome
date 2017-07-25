//noinspection NodeJsCodingAssistanceForCoreModules
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    home: './src/js/home.js',
    low_priority_index: './src/js/low_priority_index.js',
    error: './src/js/error.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
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
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      moment: 'moment',
    }),
    new CopyWebpackPlugin(
      [
        {from: "src/img/", to: "img/"},
        {from: "src/json/", to: "json/"},
        {from: "src/manifest.json"}
      ]
    )
  ]
};
