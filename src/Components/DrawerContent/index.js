import React, { Component } from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import styles from "./styles";
import { t } from "@i18n";

const DrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.header}>{t("lists")}</Text>
      <DrawerItemList {...props} />
    </SafeAreaProvider>
  </DrawerContentScrollView>
);
export default DrawerContent;
