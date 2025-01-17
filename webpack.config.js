var path = require('path');

module.exports = {
  entry: path.join(__dirname, "client/app.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client/main")
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  }
}