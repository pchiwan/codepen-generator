const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),  
  new ExtractTextPlugin('app.css')
];

if (process.env.PROD_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: { limit: 100000 },
      }
    ]
  },
  plugins: plugins,
}