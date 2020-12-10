import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

import { addTracking } from "../store/actions/trackingAction";
import Screen from "../components/Screen";

function DetailScreen({ route }) {
  const { userName, tracking } = useSelector((state) => state.trackingReducer);

  const dispatch = useDispatch();

  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("data", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handleTracking = (value) => {
    dispatch(addTracking(value));
    saveData({ name: userName, tracking: tracking });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={{
            uri: route.params.image,
          }}
          style={styles.image}
        />
        <View style={styles.body}>
          <Text style={styles.name}>{route.params.name}</Text>
          <Text style={styles.location}>
            Location : {route.params.location}
          </Text>
          <Text style={styles.entryType}>Price : {route.params.entryType}</Text>
          <TouchableOpacity
            onPress={() => handleTracking(route.params)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Track Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    elevation: 8,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    backgroundColor: "#f39233",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  entryType: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: 50,
  },
  image: {
    flex: 1,
  },
  location: {
    fontSize: 25,
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default DetailScreen;
