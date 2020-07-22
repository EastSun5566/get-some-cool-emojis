const { resolve } = require('path');

module.exports = {
  entry: ['core-js/features/array/from', './src/index.js'],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'getSomeCoolEmojis',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
