import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import ListDecksScreen from "./ListDecksScreen";
import NewDeckScreen from "./NewDeckScreen";
import AppNavigator from "./AppNavigator";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Octicons
} from "@expo/vector-icons";

const TabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(
        {
          Home: AppNavigator,
          "New Deck": NewDeckScreen
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            initialRouteName: "Home",
            tabBarIcon: ({ tintColor }) => {
              const { routeName } = navigation.state;
              switch (routeName) {
                case "Home":
                  return (
                    <MaterialCommunityIcons
                      name="cards"
                      size={30}
                      color={tintColor}
                    />
                  );
                case "New Deck":
                  return <Octicons name="plus" size={30} color={tintColor} />;
                default:
                  return (
                    <FontAwesome name="home" size={30} color={tintColor} />
                  );
              }
            }
          })
        }
      )
    : createMaterialTopTabNavigator({
        Home: AppNavigator,
        "New Deck": NewDeckScreen
      });

export default createAppContainer(TabNavigator);
