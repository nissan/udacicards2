import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import DeckSummary from "./DeckSummary";

export class ListDecksScreen extends React.Component {
  static navigationOptions = {
    title: "Decks"
  };
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }
  renderItem = ({ item }) => {
    return (
      <DeckSummary
        key={item.title}
        title={item.title}
        cardCount={item.cardCount}
        onPress={() =>
          this.props.navigation.navigate("DeckDetails", { id: item.title })
        }
        {...this.props}
      />
    );
  };
  async componentDidMount() {
    const decks = await getDecks();
    this.props.dispatch(receiveDecks(decks));
  }
  render() {
    const { decks } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          data={Object.keys(decks).map(key => ({
            title: decks[key].title,
            cardCount: decks[key].questions.length
          }))}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
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
