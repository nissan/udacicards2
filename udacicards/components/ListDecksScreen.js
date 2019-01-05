import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import DeckSummary from "./DeckSummary";

export class ListDecksScreen extends React.Component {
  static navigationOptions = {
    title: "Decks"
  };
  async componentDidMount() {
    const decks = await getDecks();
    this.props.dispatch(receiveDecks(decks));
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <DeckSummary
          title="Test Deck"
          cardCount="3"
          onPress={() => navigation.navigate("DeckDetails", { id: 1 })}
        />
      </View>
    );
  }
}

const mapStateToProps = (decks, ownProps) => {
  return {
    decks,
    navigation: ownProps.navigation
  };
};

export default connect(mapStateToProps)(ListDecksScreen);
