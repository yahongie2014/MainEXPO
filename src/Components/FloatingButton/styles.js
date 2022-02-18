/** @format */
import { Platform, StyleSheet } from "react-native";
import i18n from "@i18n";
import Color from "@config/Color";
const float_color = this.props;
const styles = StyleSheet.create({
  addButton: {
    width: 50,
    height: 50,
    ...i18n.select({
      rtl: { paddingEnd: 1 },
      ltr: { paddingStart: 1 },
    }),
    paddingBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: float_color ? float_color : Color.tabbarColor,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  addButtonText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});
export default styles;
