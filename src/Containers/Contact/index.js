import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styles from "./styles";
import { NavigateHook } from "@navigation";
import { Button } from "react-native-paper";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }
  componentDidMount() {}

  render() {
    //For Get Params Navigation
    // const { userName } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World...!</Text>
        <View style={styles.buttonView}>
          <Button style={styles.button} onPress={() => NavigateHook.goBack()}>
            Go Back
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
