/** @format */

import React from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  View,
  Image,
  TouchableHighlight,
  Text,
  ActivityIndicator,
  I18nManager,
} from "react-native";
import styles from "./styles";

const ShoppingCart = (props) => {
  if (props.type === "border") {
    return <BorderButton {...props} />;
  } else if (props.type === "image") {
    return <ImageButton {...props} />;
  } else if (props.type === "text") {
    return <TextButton {...props} />;
  } else if (props.type === "tab") {
    return <TabButton {...props} />;
  }
  return <StandardButton {...props} />;
};

ShoppingCart.propTypes = {
  type: PropTypes.string,
};

const TextButton = (props) => (
  <TouchableHighlight
    disabled={props.disabled || props.isLoading}
    onPress={() => props.onPress()}
    style={[
      styles.button,
      props.style,
      props.inactive && { backgroundColor: "#C6D8E4" },
    ]}
    activeOpacity={0.9}
    underlayColor="#ccc"
  >
    <View style={styles.buttonView}>
      {props.icon && (
        <Image
          source={props.icon}
          defaultSource={props.defaultSource}
          style={[
            styles.imageIcon,
            { tintColor: props.color },
            I18nManager.isRTL && {
              transform: [{ rotate: "180deg" }],
            },
          ]}
        />
      )}
      <Text {...props} style={[styles.text, props.textStyle]}>
        {props.text}
      </Text>
      {props.isLoading && (
        <ActivityIndicator style={styles.loading} color="#FFF" />
      )}
    </View>
  </TouchableHighlight>
);

const BorderButton = (props) => (
  <TouchableHighlight
    disabled={props.disabled || props.isLoading}
    onPress={() => props.onPress()}
    style={[
      styles.button,
      props.style,
      props.inactive && { backgroundColor: "#C6D8E4" },
    ]}
    activeOpacity={0.9}
    underlayColor="#ccc"
  >
    <View style={styles.buttonView}>
      {props.icon && (
        <Image
          source={props.icon}
          defaultSource={props.defaultSource}
          style={[
            styles.imageIcon,
            { tintColor: props.color },
            I18nManager.isRTL && {
              transform: [{ rotate: "180deg" }],
            },
          ]}
        />
      )}
      <Text {...props} style={[styles.text, props.textStyle]}>
        {props.text}
      </Text>
      {props.isLoading && (
        <ActivityIndicator style={styles.loading} color="#FFF" />
      )}
    </View>
  </TouchableHighlight>
);

const StandardButton = (props) => (
  <TouchableHighlight
    disabled={props.disabled || props.isLoading}
    onPress={() => props.onPress()}
    style={[
      styles.button,
      props.style,
      props.inactive && { backgroundColor: "#C6D8E4" },
    ]}
    activeOpacity={0.9}
    underlayColor="#ccc"
  >
    <View style={styles.buttonView}>
      {props.icon && (
        <Image
          source={props.icon}
          defaultSource={props.defaultSource}
          style={[
            styles.imageIcon,
            { tintColor: props.color },
            I18nManager.isRTL && {
              transform: [{ rotate: "180deg" }],
            },
          ]}
        />
      )}
      <Text {...props} style={[styles.text, props.textStyle]}>
        {props.text}
      </Text>
      {props.isLoading && (
        <ActivityIndicator style={styles.loading} color="#FFF" />
      )}
    </View>
  </TouchableHighlight>
);

const ImageButton = (props) => (
  <TouchableHighlight
    disabled={props.disabled}
    onPress={() => props.onPress()}
    activeOpacity={0.8}
    underlayColor="#eeeeee"
    style={props.buttonStyle}
  >
    <Image
      {...props}
      defaultSource={props.defaultSource}
      style={[
        props.imageStyle,
        props.isAddWishList && { tintColor: "#e74c3c" },
        props.isAddToCart && { tintColor: Color.TabActive },
      ]}
      resizeMode="contain"
    />
  </TouchableHighlight>
);

const TabButton = (props) => (
  <TouchableOpacity
    onPress={() => props.onPress()}
    activeOpacity={0}
    selected={props.selected}
  >
    <View
      style={[
        styles.tabButton,
        props.buttonStyle,
        props.selected && styles.tabActive,
      ]}
    >
      <Text
        style={[
          styles.tabButtonText,
          props.textStyle,
          props.selected && styles.tabActiveText,
        ]}
      >
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ShoppingCart;
