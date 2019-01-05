import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListDecksScreen from "./ListDecksScreen";
import NewCardScreen from "./NewCardScreen";
import DoQuizScreen from "./DoQuizScreen";
import DeckDetailsScreen from "./DeckDetailsScreen";

const AppNavigator = createStackNavigator({
  Home: ListDecksScreen,
  NewCard: NewCardScreen,
  DoQuiz: DoQuizScreen,
  DeckDetails: DeckDetailsScreen
});

export default createAppContainer(AppNavigator);
