import { Text, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "./styles";

class FloatingButton extends Component {
  static defaultProps = {
    style: {},
  };
  render() {
    const { name } = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.addButton, this.props.style]}
      >
        <Text style={styles.addButtonText}>{name}</Text>
      </TouchableOpacity>
    );
  }
}
export default FloatingButton;
