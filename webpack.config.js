var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.js?$/,
        exculde: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
}
