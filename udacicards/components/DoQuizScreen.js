import React from "react";
import { View, Text } from "react-native";

export class DoQuizScreen extends React.Component {
  static navigationOptions = {
    title: "Quiz"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Do Quiz Screen</Text>
      </View>
    );
  }
}

export default DoQuizScreen;
