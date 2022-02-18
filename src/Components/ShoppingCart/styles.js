/** @format */
import { StyleSheet } from "react-native";
import Color from "@config/Color";

const styles = StyleSheet.create({
  tabActiveText: {
    color: Color.TabActive,
  },
  tabActive: {
    marginTop: 1,
    borderBottomWidth: 2,
    borderBottomColor: Color.TabActive,
  },
  button: {
    backgroundColor: "#0B4A7D",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageIcon: {
    resizeMode: "contain",
    width: 20,
    marginRight: 8,
  },
  text: {
    color: "white",
    fontSize: 17,
    marginTop: 3,
  },
  borderButton: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
  },
  tabButton: {
    height: 50,
    justifyContent: "center",
  },
  tabButtonText: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    fontSize: 12,
  },
  loading: {
    marginLeft: 5,
  },
});
export default styles;
