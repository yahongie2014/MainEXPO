import { StyleSheet, Dimensions } from "react-native";
import Color from "@config/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: Color.H1,
    fontSize: 30,
  },
  button: {
    backgroundColor: Color.Button,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
