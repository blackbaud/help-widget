const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const BUILD_PATH = 'dist';

module.exports = webpackMerge(commonConfig, {

  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    historyApiFallback: true
  },

  output: {
    path: helpers.root(BUILD_PATH),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  }
});
