import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListCard({ image, name, onPress, delIcon = false, onPressDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          ></Image>
          <View style={styles.body}>
            <Text style={styles.bodyText} numberOfLines={1}>
              {name}
            </Text>
            {delIcon && (
              <View style={styles.deleteIcon}>
                <TouchableOpacity
                  onPress={onPressDelete}
                  style={styles.touchDelete}
                >
                  <MaterialCommunityIcons
                    name="delete-forever"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  bodyText: {
    flex: 4,
    left: 20,
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    backgroundColor: "#e6e6e6",
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    width: Dimensions.get("screen").width * 0.8,
    height: 40,
    overflow: "hidden",
    padding: 2,
  },
  deleteIcon: {
    flex: 1,
    backgroundColor: "#c9bbb5",
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  touchDelete: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListCard;
