import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export class ListDecksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Decks</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("DeckDetails")}
        >
          <Text>Deck Details</Text>
        </TouchableOpacity>
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

export default ListDecksScreen;
