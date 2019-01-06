import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
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
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = (decks, ownProps) => {
  return {
    decks,
    navigation: ownProps.navigation
  };
};

export default connect(mapStateToProps)(ListDecksScreen);
