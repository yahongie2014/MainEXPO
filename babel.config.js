module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "babel-plugin-module-resolver",
        {
          modulesDirectories: ["node_modules"],
          extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
          alias: {
            "@components": "./src/Components",
            "@config": "./src/Config",
            "@redux": "./src/Redux",
            "@navigation": "./src/Navigation",
            "@i18n": "./src/i18n",
            "@containers": "./src/Containers",
            "@actions": "./src/Redux/actions",
            "@reducers": "./src/Redux/reducers",
            "@lang": "./src/lang",
            "@fonts": ["./assets/fonts/*"],
            "@images": ["./assets/images/*"],
            "@assets": ["./assets/*"],
          },
        },
      ],
    ],
  };
};
