module.exports = {
  entry: './index',
  // Place output files in `./dist/my-app.js`
  output: {
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
