import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";

export class ListDecksScreen extends React.Component {
  static navigationOptions = {
    title: "Decks"
  };
  async componentDidMount() {
    const decks = await getDecks();
    this.props.dispatch(receiveDecks(decks));
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Decks</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("DeckDetails", { id: 1 })
          }
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

const mapStateToProps = decks => {
  return {
    decks
  };
};

export default connect(mapStateToProps)(ListDecksScreen);
