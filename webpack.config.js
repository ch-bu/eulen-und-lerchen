const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'basicscroll'],
    app: './app/js/index.jsx'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          babelrc: false,
          presets: ['es2017', 'react', 'es2015']
        }
      },
      {
        test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      // {
      //   test: /\.css?$/,
      //   loader: 'file-loader',
      //   include: path.resolve(__dirname, 'app/css'),
      //   options: {
      //     outputPath: 'css/'
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      // https://github.com/kangax/html-minifier#options-quick-reference
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      // If I delete this line the javascript
      // gets minimized
      // include: /\.min\.js$/,
      minimize: true,
      comments: false
    }),
  ]
};
