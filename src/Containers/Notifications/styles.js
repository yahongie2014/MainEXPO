import { StyleSheet, I18nManager as RNI18nManager } from "react-native";
import Color from "@config/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  safe: {
    flex: 1,
    flexDirection: RNI18nManager.isRTL ? "column" : "column-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sample: {
    flex: 1,
    alignItems: "center",
  },
  float_btn: {
    position: "absolute",
    bottom: 30,
    end: 30,
  },
});
export default styles;
