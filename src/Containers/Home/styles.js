import { StyleSheet, I18nManager as RNI18nManager } from "react-native";
import Color from "@config/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: { backgroundColor: "#EEE", width: "50%" },

  safe: {
    flex: 1,
    flexDirection: RNI18nManager.isRTL ? "column" : "column-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: Color.Button,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
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
