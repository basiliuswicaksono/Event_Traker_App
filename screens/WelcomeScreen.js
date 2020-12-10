import React, { useEffect, useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../components/Screen";
import { setTracking, setUserName } from "../store/actions/trackingAction";

function WelcomeScreen({ navigation }) {
  const [input, setInput] = useState("");
  const { userName } = useSelector((state) => state.trackingReducer);

  const dispatch = useDispatch();

  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("data", jsonValue);
      dispatch(setTracking(value.tracking));
      dispatch(setUserName(value.name));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("data");
      if (jsonValue) {
        dispatch(setTracking(JSON.parse(jsonValue).tracking));
        dispatch(setUserName(JSON.parse(jsonValue).name));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleButton = () => {
    if (input) {
      if (userName === input) {
        navigation.navigate("HomeNavigator");
      } else {
        saveData({ name: input, tracking: [] });
        navigation.navigate("HomeNavigator");
      }
    } else {
      createAlert();
    }
  };

  const handleInput = (text) => {
    setInput(text);
  };

  const createAlert = () =>
    Alert.alert(
      "Alert!!!",
      "Insert Your Name",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={require("../assets/favicon.png")}
          />
          <View style={styles.text}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.appName}>Event Tracker App</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              defaultValue={input}
              style={styles.input}
              placeholder="username"
              onChangeText={(text) => handleInput(text)}
            ></TextInput>
            <TouchableOpacity onPress={handleButton} style={styles.button}>
              <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  appName: {
    color: "#f39233",
    fontWeight: "bold",
  },
  button: {
    elevation: 8,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    backgroundColor: "#f39233",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginBottom: 50,
  },
  inputContainer: {
    width: "50%",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 3,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    marginBottom: 20,
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f39233",
  },
});

export default WelcomeScreen;
