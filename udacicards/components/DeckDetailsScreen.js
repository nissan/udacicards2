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
          <Text style={styles.txtBlack}>{title}</Text>
          <Text style={styles.count}>
            {cardCount} {Number(cardCount) === 1 ? " card" : " cards"}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btnBlack}
          onPress={() => this.props.navigation.navigate("NewCard", { title })}
        >
          <Text style={styles.txtWhite}>Add Card</Text>
        </TouchableOpacity>
        {cardCount > 0 && (
          <TouchableOpacity
            style={styles.btnGray}
            onPress={() => this.props.navigation.navigate("DoQuiz", { title })}
          >
            <Text style={styles.txtBlack}>Start Quiz</Text>
          </TouchableOpacity>
        )}
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
    justifyContent: "center",
    alignItems: "center"
  },
  txtBlack: {
    padding: 4,
    color: "black",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  txtWhite: {
    padding: 4,
    color: "white",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    padding: 4,
    color: "black",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center"
  },
  btnBlack: {
    backgroundColor: "black",
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
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
  btnGray: {
    backgroundColor: "gray",
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
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
