const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      // process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  resolve: {
    fallback: {
      "@chainsafe/blst": false,
      crypto: false,
      fs: false,
      path: false,
    },
  },
  experiments: {
    topLevelAwait: true,
  },
};
