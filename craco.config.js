const webpackConfig = require("./webpack.config.js");

module.exports = {
  webpack: {
    configure: {
      experiments: webpackConfig.experiments,
    },
  },
};
