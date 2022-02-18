import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "@i18n";
import styles from "./styles";

class MenuButton extends Component {
  static defaultProps = {
    style: {},
    color: "#333",
    flipForRTL: true,
    iconComponent: MaterialCommunityIcons,
  };
  getFlipForRTLStyle() {
    if (!this.props.flipForRTL) {
      return {};
    }
    return {
      transform: [
        {
          scaleX: i18n.isRTL ? -1 : 1,
        },
      ],
    };
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.button, this.getFlipForRTLStyle(), this.props.style]}
      >
        <this.props.iconComponent
          size={24}
          name={this.props.icon}
          color={this.props.color}
        />
      </TouchableOpacity>
    );
  }
}
export default MenuButton;
