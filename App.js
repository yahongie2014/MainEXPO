import React from "react";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import configureStore from "@redux";
import RootRouter from "./src/RootRouter";
import { Images, Fonts } from "@config/Images";
import "react-native-gesture-handler";
import "react-native-screens";
// import "./ReactotronConfig";

const store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appIsReady: false };
  }
  async componentWillMount() {}

  async componentWillUnmount() {}

  async componentDidMount() {}

  cacheImages = (images) => {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      }
      return Asset.fromModule(image).downloadAsync();
    });
  };

  cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  loadAssets = async () => {
    const imageAssets = this.cacheImages([Images.logo, Images.imageHolder]);
    const fontAssets = this.cacheFonts([Fonts]);
    await Promise.all([...imageAssets, ...fontAssets]);
  };
  render() {
    if (!this.state.appIsReady) {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={() => this.setState({ appIsReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}
