const createExpoWebpackConfigAsync = require("@expo/webpack-config");

const path = require("path");
module.exports = async function (env, argv, loaders) {
  const config = await createExpoWebpackConfigAsync(env, argv, loaders);
  loaders = [
    {
      test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg|otf)$/,
      loader: "url-loader?limit=100000",
    },
  ];
  // If you want to add a new alias to the config.
  config.resolve.extensions["extensions"] = [".js", ".jsx", ".web.js"];
  config.resolve.alias = {
    ...config.resolve.alias,
    modulesDirectories: path.resolve(__dirname, "node_modules"),
    "@components": path.resolve(__dirname, "src/Components/"),
    "@containers": path.resolve(__dirname, "src/Containers/"),
    "@config": path.resolve(__dirname, "src/Config/"),
    "@redux": path.resolve(__dirname, "src/Redux/"),
    "@reducers": path.resolve(__dirname, "src/Redux/reducers/"),
    "@actions": path.resolve(__dirname, "src/Redux/actions/"),
    "@navigation": path.resolve(__dirname, "src/Navigation/"),
    "@lang": path.resolve(__dirname, "src/lang/"),
    "@images": path.resolve(__dirname, "assets/images/*"),
    "@assets": path.resolve(__dirname, "assets/images/*"),
    "@fonts": path.resolve(__dirname, "assets/fonts/*"),
  };
  if (config.mode === "development") {
    config.devServer.compress = false;
  }
  if (config.mode === "production") {
    config.optimization.minimize = false;
  }
  return config;
};
