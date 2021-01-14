const { resolve } = require('path');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'getSomeCoolEmojis',
    umdNamedDefine: true,
    globalObject: 'this',
    sourceMapFilename: 'index.js.map',
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
