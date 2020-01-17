'use strict';

const WebpackAssetsManifest = require('webpack-assets-manifest');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;

const production = {
  plugins: [
    new WebpackAssetsManifest(),
    new CssoWebpackPlugin(),
  ],
  devtool: 'source-map',
};

module.exports = production;
