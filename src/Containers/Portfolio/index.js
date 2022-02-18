import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styles from "./styles";
import { NavigateHook } from "@navigation";
import { Button } from "react-native-paper";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={styles.container}></View>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
