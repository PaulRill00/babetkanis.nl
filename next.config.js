module.exports = {
  future: {
    webpack5: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  compress: true,
};
