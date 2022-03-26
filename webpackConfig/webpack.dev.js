const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../", "dist/"),
      watch: true,
    },
    port: 9000,
    open: true,
    client: {
      logging: "error",
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
