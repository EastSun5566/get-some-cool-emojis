const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
    library: 'get-some-cool-emojis',
    libraryTarget: 'umd',
  },
};
