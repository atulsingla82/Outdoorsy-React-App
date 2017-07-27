const path = require('path')
const webpack = require('webpack')

module.exports = {
  // This is the entry point or start of our react applicaton
  entry: "./src/index.js",
  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
     publicPath: '/public/'
  },
  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /src/,
        loader: "babel-loader",
        query: {
           plugins: [new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })],
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "source-map"
};