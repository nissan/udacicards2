import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import { addCardToDeck } from "../utils/api";
import { addCardToDeck as addCard } from "../actions";
import { connect } from "react-redux";

export class NewCardScreen extends React.Component {
  static navigationOptions = {
    title: "New Card"
  };
  state = {
    question: "",
    answer: ""
  };
  constructor(props) {
    super(props);
    this.questionChange = this.questionChange.bind(this);
    this.answerChange = this.answerChange.bind(this);
    this.addCard = this.addCard.bind(this);
  }
  addCard = title => {
    const { question, answer } = this.state;
    const card = { question, answer };
    const { dispatch, navigation } = this.props;
    if (
      question !== undefined &&
      question !== "" &&
      answer !== undefined &&
      answer !== "" &&
      title !== undefined &&
      title !== 0
    ) {
      addCardToDeck(title, card);
      dispatch(addCard({ title, question, answer }));
      navigation.navigate("Home");
    }
  };
  questionChange = question => {
    this.setState(() => ({ question }));
  };
  answerChange = answer => {
    this.setState(() => ({ answer }));
  };
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", 0);
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.screenHeader}> Deck: {title}</Text>
        <Text style={styles.header}>Question</Text>
        <TextInput
          style={styles.input}
          placeholder="Question"
          onChangeText={this.questionChange}
          value={question}
        />
        <Text style={styles.header}>Answer</Text>
        <TextInput
          style={styles.input}
          placeholder="Answer"
          onChangeText={this.answerChange}
          value={answer}
        />
        <TouchableOpacity onPress={() => this.addCard(title)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  screenHeader: {
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "blue",
    fontSize: 20
  },
  header: {
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: 20
  },
  input: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
    width: 350,
    height: 40,
    color: "black",
    fontSize: 20,
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
export default connect()(NewCardScreen);
