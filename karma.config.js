const webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["webpack", "mocha", "chai"],
    files: ["test/unit/**/*.test.js"],
    exclude: [],
    preprocessors: {
      "test/**/*.js": ["webpack"],
    },
    webpack: {
      mode: "production",
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      experiments: webpackConfig.experiments,
      optimization: webpackConfig.optimization,
      stats: { warnings: true, errorDetails: true, errors: true },
    },
    reporters: ["spec"],

    browsers: ["ChromeHeadless"],

    singleRun: true,
  });
};
