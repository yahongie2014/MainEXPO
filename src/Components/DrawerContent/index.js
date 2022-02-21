import React from "react";
import { Text } from "react-native";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import styles from "./styles";
import { t } from "@i18n";

const DrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <Text style={styles.header}>{t("lists")}</Text>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);
export default DrawerContent;
