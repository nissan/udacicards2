import { DECKS_STORAGE_KEY, dummyData } from "./_decks.js";
import { AsyncStorage } from "react-native";

export const setDummyData = async () => {
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
  return dummyData;
};
