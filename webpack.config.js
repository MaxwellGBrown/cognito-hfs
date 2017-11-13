var WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = {
  entry: './index',
  // Place output files in `./dist/my-app.js`
  output: {
    filename: 'build.js',
    libraryTarget: 'commonjs',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
  plugins: [
    new WrapperPlugin({
      footer: "\n\nrequire('make-runnable/custom')({printOutputFrame: false});"  
    })
  ]
};
