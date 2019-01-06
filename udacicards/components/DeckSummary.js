import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated
} from "react-native";

export class DeckSummary extends React.Component {
  state = {
    bounceValue: new Animated.Value(1)
  };
  constructor(props) {
    super(props);
    btnPress = this.btnPress.bind(this);
  }
  btnPress = id => {
    const { bounceValue } = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.1 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
    ]).start();
    this.props.navigation.navigate("DeckDetails", { id });
  };
  render() {
    const { title, cardCount } = this.props;
    const { bounceValue } = this.state;
    return (
      <Animated.View
        style={[styles.summary, { transform: [{ scale: bounceValue }] }]}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.btnPress(title)}
        >
          <Text style={styles.btnTextWhite}>{title}</Text>

          <Text style={styles.count}>
            {cardCount} {Number(cardCount) === 1 ? " card" : " cards"}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  summary: {
    flex: 1
  },
  btn: {
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
  btnTextWhite: {
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
export default DeckSummary;
