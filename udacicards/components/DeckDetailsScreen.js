import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export class DeckDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Deck Details for {this.props.id}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("NewCard")}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("DoQuiz")}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckDetailsScreen;
