const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');
const webpack = require('webpack');
const mode = require('yargs').argv.mode;
const libraryTarget = require('yargs').argv['output-library-target'] || 'umd';
const pkg = require('../package.json');

const banner = `${pkg.name}
${pkg.description}\n
@version v${pkg.version}
@author ${pkg.author}
@homepage ${pkg.homepage}
@repository ${pkg.repository.url}`;

const jsFileNameToTarget = {
  'umd': `${pkg.name}`,
  'commonjs': `${pkg.name}.cjs`,
  'commonjs2': `${pkg.name}.cjs2`,
};

const jsFileName = jsFileNameToTarget[libraryTarget] || jsFileNameToTarget['umd'];

let plugins = [
  new webpack.BannerPlugin(banner)
];

// Extract css only for umd module
if(libraryTarget === 'umd') {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: `${pkg.name}.css`,
    }),
  )
}


module.exports = {
  context: paths.src,
  performance: {
    hints: false
  },
  entry: {
    app: `./plugin.js`,
  },
  devtool: 'source-map',
  output: {
    path: paths.build,
    filename: mode === 'development' ? `${jsFileName}.js` : `${jsFileName}.min.js`,
    library: pkg.name,
    libraryTarget: libraryTarget,
    globalObject: '(typeof self !== \'undefined\' ? self : this)', // TODO Hack (for Webpack 4+) to enable create UMD build which can be required by Node without throwing error for window being undefined (https://github.com/webpack/webpack/issues/6522)
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: (libraryTarget === 'umd' ? [MiniCssExtractPlugin.loader] : []).concat([
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer'), require('postcss-flexbugs-fixes')],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]),
      },
      // {
      //   test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       publicPath: '../images',
      //       outputPath: 'images',
      //       name: '[name].[hash:8].[ext]',
      //     },
      //   },
      // },
    ],
  },
  plugins: plugins,
  externals: {
    'video.js': 'videojs'
  }
};
