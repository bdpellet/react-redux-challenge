var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/index.js',

  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin
    ([
      {
        from: __dirname + '/client/index.html',
        to: __dirname + '/build/index.html'
      }
    ])
  ]
};
