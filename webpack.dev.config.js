const baseConfig = require("./webpack.config");

baseConfig.mode = "development";
baseConfig.devServer = {
  static: "./build",
  port: 3000,
};
module.exports = baseConfig;
