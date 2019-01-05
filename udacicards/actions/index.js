export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";

export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const addDeck = deck => {
  return {
    type: ADD_DECK,
    deck
  };
};

export const addCardToDeck = ({ title, question, answer }) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    question,
    answer
  };
};
