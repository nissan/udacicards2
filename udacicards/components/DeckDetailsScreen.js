import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
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
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text style={styles.txtHeaderWhite}>{title}</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.count}>
            {cardCount} {Number(cardCount) === 1 ? " card" : " cards"}
          </Text>
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  summary: {
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 16 : 10,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  txtHeaderWhite: {
    padding: 4,
    color: "white",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    padding: 4,
    color: "white",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = (decks, ownProps) => {
  const { navigation } = ownProps;
  const id = navigation.getParam("id", 0);
  return {
    deck: decks[id]
  };
};

export default connect(mapStateToProps)(DeckDetailsScreen);
