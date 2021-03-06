import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppNavigator from "./components/AppNavigator";
import TabNavigator from "./components/TabNavigator";
import { Constants, AppLoading } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { setDummyData } from "./utils/api";
import { setLocalNotification } from "./utils/helpers";

export default class App extends React.Component {
  state = {
    ready: false
  };
  componentDidMount() {
    // setDummyData().then(() => this.setState({ ready: true }));
    this.setState(() => ({ ready: true }));
    setLocalNotification();
  }
  render() {
    const { ready } = this.state;
    if (!ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={createStore(reducer)}>
        <View
          style={{ height: Constants.statusBarHeight, backgroundColor: "blue" }}
        >
          <StatusBar translucent barStyle="light-content" {...this.props} />
        </View>
        <TabNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
