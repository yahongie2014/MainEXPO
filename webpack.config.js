const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // If you want to add a new alias to the config.
  config.resolve.alias["moduleA"] = "moduleB";
  if (config.mode === "development") {
    config.devServer.compress = false;
  }
  if (config.mode === "production") {
    config.optimization.minimize = false;
  }
  return config;
};
