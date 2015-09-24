/*eslint-env node*/

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/app/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
};
