import Reactotron from "reactotron-react-native";
import { reactotronRedux as reduxPlugin } from "reactotron-redux";
import Constants from "expo-constants";

console.disableYellowBox = true;
if (Constants.isDevice) {
  // test on real device: change to your local config
  Reactotron.configure({ name: "framework" });
} else {
  Reactotron.configure({ name: "framework" });
}
Reactotron.useReactNative({
  asyncStorage: { ignore: ["secret"] },
});

Reactotron.use(reduxPlugin());

if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}

console.tron = Reactotron;
