const { resolve } = require('path');

const isProd = process.env.NODE_ENV === 'production';

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
  },
  devtool: isProd ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
};
