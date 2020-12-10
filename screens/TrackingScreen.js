import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

import { deleteTracking } from "../store/actions/trackingAction";
import Screen from "../components/Screen";
import ListCard from "../components/ListCard";

function TrackingScreen({ navigation }) {
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

  const handleDelete = (value) => {
    dispatch(deleteTracking(value));
    saveData({ name: userName, tracking: tracking });
  };

  return (
    <Screen>
      <View style={styles.title}>
        <Text style={styles.titleText}>Tracking List</Text>
      </View>
      <View style={styles.contains}>
        <FlatList
          data={tracking}
          renderItem={({ item }) => (
            <ListCard
              onPress={() => navigation.navigate("DetailScreen", item)}
              image={item.image}
              name={item.name}
              delIcon={true}
              onPressDelete={() => handleDelete(item)}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contains: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    backgroundColor: "#393e46",
    padding: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    color: "#f39233",
  },
});

export default TrackingScreen;
