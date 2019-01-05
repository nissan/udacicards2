import { DECKS_STORAGE_KEY, dummyData } from "./_decks.js";
import { AsyncStorage } from "react-native";

export const setDummyData = async () => {
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
  return dummyData;
};

export const getDecks = async () => {
  const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return JSON.parse(decks);
};

export const getDeck = id => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data[id];
  });
};

export const saveDeckTitle = async title => {
  return await AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: { title, questions: [] }
    })
  );
};
export const addCardToDeck = async (title, card) => {
  const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
  const questions = Object.assign([], decks[title].questions.concat(card));
  return await AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({ [title]: { title, questions } })
  );
};
