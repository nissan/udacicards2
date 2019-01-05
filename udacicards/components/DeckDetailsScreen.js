import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

export class DeckDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details"
  };
  // static navigationOptions = {
  //   headerTitle: <MaterialCommunityIcons name="cards" size={30} />
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: `${navigation.getParam("id", 0)} Details`
  //   };
  // };
  render() {
    const { deck } = this.props;
    const { title, questions } = deck;
    const cardCount = questions.length;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{title}</Text>
        <Text>{cardCount}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("NewCard")}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("DoQuiz", { title })}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (decks, ownProps) => {
  const { navigation } = ownProps;
  const id = navigation.getParam("id", 0);
  return {
    deck: decks[id]
  };
};

export default connect(mapStateToProps)(DeckDetailsScreen);
