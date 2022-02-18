import React from "react";
import { ActivityIndicator, View, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";
import i18n, { t } from "@i18n";
import {
  BottomBarNavigation,
  NavigateHook,
  DrawerNavigation,
  DrawerBottomNav,
} from "@navigation";
import Color from "@config/Color";
import { FloatingButton } from "@components";

class RootRouter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isI18nInitialized: false,
    };
  }
  componentDidMount() {
    i18n
      .init()
      .then(() => {
        this.setState({ isI18nInitialized: true });
      })
      .catch((error) => console.warn(error));
  }

  FloatBtn() {
    NavigateHook.navigate("Contact", { userName: "Hello World !" });
  }

  render() {
    if (this.state.isI18nInitialized) {
      return (
        <>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={Color.tabbarColor}
          />
          {/* <DrawerNavigation /> */}
          {/* <BottomBarNavigation /> */}
          <DrawerBottomNav />
          <FloatingButton
            style={styles.float_btn}
            color={Color.tabbarColor}
            name="+"
            onPress={() => this.FloatBtn(this)}
          />
        </>
      );
    }

    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: Color.tabbarColor,
  },
  button: {
    marginStart: 20,
  },
  picker: { backgroundColor: "#EEE", width: "50%" },
  loadingScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  float_btn: {
    position: "absolute",
    bottom: 70,
    end: 30,
  },
});

const mapStateToProps = ({ language }) => {
  return {
    language: language.lang,
    listLanguage: language.listLanguage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
