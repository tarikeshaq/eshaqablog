const withCSS = require('@zeit/next-css');
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withCSS({
  webpack: (config, { defaultLoaders }) => {
    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins || [];
    // eslint-disable-next-line no-param-reassign
    defaultLoaders.babel.options.plugins = ['babel-plugin-styled-components'];
    // eslint-disable-next-line no-param-reassign
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    return config;
  },
  cssLoaderOptions: { url: false },
});
