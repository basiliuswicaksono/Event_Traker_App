import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

function GridCard({ image, name, onPress }) {
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
            <Text numberOfLines={1}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    borderRadius: 10,
    width: Dimensions.get("screen").width * 0.4,
    height: 200,
    overflow: "hidden",
  },
  image: {
    flex: 2,
    width: "100%",
    height: "100%",
  },
});

export default GridCard;
