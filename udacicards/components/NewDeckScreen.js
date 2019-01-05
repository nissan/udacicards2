import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { connect } from "react-redux";

export class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: "New Deck"
  };
  state = {
    title: ""
  };
  constructor(props) {
    super(props);
    this.titleChange = this.titleChange.bind(this);
    this.addDeck = this.addDeck.bind(this);
  }
  addDeck = () => {
    const { title } = this.state;
    const { dispatch, navigation } = this.props;
    if (title !== undefined && title !== "") {
      saveDeckTitle(title);
      const deck = { [title]: { title, questions: [] } };
      dispatch(addDeck(deck));
      navigation.navigate("Home");
    }
  };
  titleChange = title => {
    this.setState(() => ({ title }));
  };
  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={this.titleChange}
          value={title}
        />
        <TouchableOpacity onPress={() => this.addDeck()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(NewDeckScreen);
