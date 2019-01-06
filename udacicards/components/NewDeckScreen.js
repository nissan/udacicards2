import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
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
      navigation.navigate("DeckDetails", { id: title });
    }
  };
  titleChange = title => {
    this.setState(() => ({ title }));
  };
  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder="Deck Title"
          onChangeText={this.titleChange}
          value={title}
        />
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => this.addDeck()}
        >
          <Text style={styles.txtWhite}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  },
  btnSubmit: {
    backgroundColor: "blue",
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
  txtWhite: {
    padding: 4,
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default connect()(NewDeckScreen);
