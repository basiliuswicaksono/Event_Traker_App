import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./store";

import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
