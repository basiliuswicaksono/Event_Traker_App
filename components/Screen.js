import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
});

export default Screen;
