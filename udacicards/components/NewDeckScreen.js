import React from "react";
import { View, Text } from "react-native";

export class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: "New Deck"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>New Deck Screen</Text>
      </View>
    );
  }
}

export default NewDeckScreen;
