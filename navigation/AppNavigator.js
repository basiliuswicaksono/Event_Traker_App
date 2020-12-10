import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import WelcomeScreen from "../screens/WelcomeScreen";
import EventsListScreen from "../screens/EventsListScreen";
import TrackingScreen from "../screens/TrackingScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="EventsListScreen"
      component={EventsListScreen}
    ></Stack.Screen>
    <Stack.Screen name="DetailScreen" component={DetailScreen}></Stack.Screen>
  </Stack.Navigator>
);

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { height: 0, bottom: 0 },
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="TrackingScreen" component={TrackingScreen} />
    </Tab.Navigator>
  );
};

const Nav = createStackNavigator();

const AppNavigator = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name="WelcomeScreen" component={WelcomeScreen}></Nav.Screen>
      <Nav.Screen name="HomeNavigator" component={HomeNavigator}></Nav.Screen>
    </Nav.Navigator>
  );
};

export default AppNavigator;
