import { RECEIVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from "../actions";

export const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return { ...state, ...action.decks };
    case ADD_DECK:
      return { ...state, ...action.deck };
    case ADD_CARD_TO_DECK:
      const card = { question: action.question, answer: action.answer };
      const questions = Object.assign(
        [],
        state[action.title].questions.concat(card)
      );
      const deck = { [action.title]: { title: action.title, questions } };
      return { ...state, deck };
    default:
      return state;
  }
};

export default decks;
