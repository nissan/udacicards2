import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    const { navigation } = this.props;
    const id = navigation.getParam("id", 0);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Deck Details for {JSON.stringify(id)}</Text>
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
