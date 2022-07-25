const webpackConfig = require("./webpack.config.js");

module.exports = {
  webpack: {
    plugins: webpackConfig.plugins,
    configure: {
      resolve: webpackConfig.resolve,
      experiments: webpackConfig.experiments,
    },
  },
};
