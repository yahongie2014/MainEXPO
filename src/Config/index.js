/** @format */

import _Images from "./Images";
import _Fonts from "./Fonts";
import _Languages from "./Languages";
import _Config from "./Config";
import reactotron from "reactotron-react-native";
import _Validate from "./Validate";
import _Validator from "./Validator";
import _Color from "./Color";
import * as _API from "./Routes";

const _log = (values) => __DEV__ && reactotron.log(values);
const _warn = (values) => __DEV__ && reactotron.warn(values);
const _error = (values) => __DEV__ && reactotron.error(values);
export function connectConsoleToReactotron() {
  console.log = _log;
  console.warn = _warn;
  console.error = _error;
}

export const request = async (url, data = {}) => {
  try {
    const response = await fetch(url, data);

    return await response.json();
  } catch (err) {
    return { error: err };
  }
};

export const Color = _Color;
export const Images = _Images;
export const Languages = _Languages;
export const Config = _Config;
export const Fonts = _Fonts;
export const registerForPushNotificationsAsync = require("./firebase");
export const Routes = _API;
export const log = _log;
export const warn = _warn;
export const error = _error;
