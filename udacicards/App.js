import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppNavigator from "./components/AppNavigator";
import TabNavigator from "./components/TabNavigator";
import { Constants, AppLoading } from "expo";

export default class App extends React.Component {
  state = {
    ready: false
  };
  componentDidMount() {
    this.setState({ ready: true });
  }
  render() {
    const { ready } = this.state;
    if (!ready) {
      return <AppLoading />;
    }
    return (
      <React.Fragment>
        <View
          style={{ height: Constants.statusBarHeight, backgroundColor: "blue" }}
        >
          <StatusBar translucent barStyle="light-content" {...this.props} />
        </View>
        <TabNavigator />
      </React.Fragment>
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
