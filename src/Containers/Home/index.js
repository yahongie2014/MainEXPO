import React, { Component } from "react";
import * as Updates from "expo-updates";
import { connect } from "react-redux";
import { View, I18nManager, Alert, Text, Picker } from "react-native";
import {
  setAppLayoutDirection,
  setAppLanguage,
} from "@actions/SwitchDirection";
import { t } from "@i18n";
import styles from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _SwitchLang(locale) {
    Alert.alert(t(`general:Confirm`), t(`general:SwitchRtlConfirm`), [
      {
        text: t(`general:CANCEL`),
        onPress: () => undefined,
      },
      {
        text: t(`general:OK`),
        onPress: () => {
          I18nManager.forceRTL(locale == "ar");
          Updates.reloadAsync();
        },
      },
    ]);
  }
  render() {
    const { language, listLanguage } = this.props;

    return (
      <View style={styles.container}>
        <Text>{t(`general:Welcome`)}</Text>
        <Picker
          mode="dropdown"
          // selectedValue={language}
          style={styles.picker}
          onValueChange={(value) => this._SwitchLang(value)}
        >
          {listLanguage.map((languageItem, i) => {
            return (
              <Picker.Item
                key={i}
                value={languageItem.key}
                label={languageItem.label}
              />
            );
          })}
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = ({ LayoutDirection, user, language }) => {
  return {
    layout: LayoutDirection.layout,
    UserInfo: user.info,
    AuthToken: user.accessToken,
    language: language.lang,
    listLanguage: language.listLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLayout: (Layout) => dispatch(setAppLayoutDirection(Layout)),
    changeLanguage: (locale) => dispatch(setAppLanguage(locale)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
