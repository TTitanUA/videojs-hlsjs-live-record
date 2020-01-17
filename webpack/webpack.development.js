'use strict';
const paths = require('./paths');
const development = {
  plugins: [
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.base,
    index: 'index.html',
    compress: false,
    port: 9000,
    inline: false,
    liveReload: false,
    historyApiFallback: {
      rewrites: [
        { from: /^\/dist\/videojs-hlsjs-live-record\.css$/, to: '/videojs-hlsjs-live-record.css' },
        { from: /^\/dist\/videojs-hlsjs-live-record\.js$/, to: '/videojs-hlsjs-live-record.js' }
      ]
    }
  }
};

module.exports = development;
