import React, { Component } from "react";
import { connect } from "react-redux";
import { View, I18nManager as RNI18nManager, Picker } from "react-native";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View></View>;
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
