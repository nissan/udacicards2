import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";

export const DeckSummary = ({ title, cardCount, onPress }) => {
  return (
    <View style={styles.summary}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnTextWhite}>{title}</Text>
        <Text style={styles.count}>
          {cardCount} {Number(cardCount) === 1 ? " card" : " cards"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
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
    fontSize: 18,
    textAlign: "center",
    color: "white"
  }
});
export default DeckSummary;
