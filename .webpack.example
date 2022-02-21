const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const node_modules = path.resolve(__dirname, "node_modules");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg|otf)$/,
    include: /(packages|example)\/.+/,
    exclude: /node_modules/,
    use: "babel-loader",
  });

  // If you want to add a new alias to the config.

  config.resolve.extensions["extensions"] = [".js", ".jsx", ".web.js"];
  Object.assign(config.resolve.alias, {
    ...config.resolve.alias,
    react: path.resolve(node_modules, "react"),
    "react-native": path.resolve(node_modules, "react-native-web"),
    "react-native-web": path.resolve(node_modules, "react-native-web"),
    "@expo/vector-icons": path.resolve(node_modules, "@expo/vector-icons"),
    "react-native-reanimated": path.resolve(
      node_modules,
      "react-native-reanimated"
    ),
    modulesDirectories: path.resolve(node_modules),
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
  });
  if (config.mode === "development") {
    config.devServer.compress = false;
  }
  if (config.mode === "production") {
    config.optimization.minimize = false;
  }

  return config;
};
