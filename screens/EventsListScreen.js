import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import GridCard from "../components/GridCard";
import ListCard from "../components/ListCard";

function EventsListScreen({ navigation }) {
  const [list, setList] = useState(false);

  const DATA = [
    {
      id: "1",
      image:
        "https://wtsindiamedia.s3.amazonaws.com/sitemedia/2013/04/DSC_00475.jpg",
      name: "Metallica Concert",
      location: "Palace Grounds",
      entryType: "paid entry",
    },
    {
      id: "2",
      image:
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/09/11081011/StyleBazaarExhibitions-i.jpg",
      name: "Saree Exhibition",
      location: "Malleswaram Grounds",
      entryType: "free entry",
    },
    {
      id: "3",
      image:
        "https://theweekendedition.com.au/wp-content/uploads/sites/6/2019/05/TWE-wine-stock-02-700x350-c-center.jpg",
      name: "Wine tasting event",
      location: "Links Brewery",
      entryType: "paid entry",
    },
    {
      id: "4",
      image:
        "https://assets.techcircle.in/uploads/article-image/2018/09/images/16590-startup.jpg",
      name: "Startups Meet",
      location: "Kanteerava Indoor Stadium",
      entryType: "paid entry",
    },
    {
      id: "5",
      image:
        "https://www.treebo.com/blog/wp-content/uploads/2018/02/Ladies-Night-Featured-Image.jpg",
      name: "Summer Noon Party",
      location: "Kumara Park",
      entryType: "paid entry",
    },
    {
      id: "6",
      image:
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/03/06222636/BigBrewsky2.jpg",
      name: "Rock and Roll nights",
      location: "Sarjapur Road",
      entryType: "paid entry",
    },
    {
      id: "7",
      image:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/g/q/p529-15773516745e0479fa8a082.jpg?tr=tr:n-large",
      name: "Barbecue Fridays",
      location: "Whitefield",
      entryType: "paid entry",
    },
    {
      id: "8",
      image:
        "https://kidengage.com/images/profiles/115018893411306773034/events/sketch-stretch/slider/image1.png",
      name: "Summer workshop",
      location: "Indiranagar",
      entryType: "free entry",
    },
    {
      id: "9",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51AnvCXryWL._SX373_BO1,204,203,200_.jpg",
      name: "Impressions & Expressionst",
      location: "MG Road",
      entryType: "free entry",
    },
    {
      id: "10",
      image:
        "https://www.dievole.it/wp-content/uploads/2017/02/8689955524_07752ed1a4_k.jpg",
      name: "Italian carnival",
      location: "Electronic City",
      entryType: "free entry",
    },
  ];

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.title}>Events</Text>
        {list ? (
          <MaterialCommunityIcons
            onPress={() => setList(false)}
            name="view-list"
            size={24}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            onPress={() => setList(true)}
            name="view-grid"
            size={24}
            color="white"
          />
        )}
      </View>
      <View style={styles.contains}>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>
            list ? (
              <ListCard
                onPress={() => navigation.navigate("DetailScreen", item)}
                image={item.image}
                name={item.name}
              />
            ) : (
              <GridCard
                onPress={() => navigation.navigate("DetailScreen", item)}
                image={item.image}
                name={item.name}
              />
            )
          }
          keyExtractor={(item) => item.id}
          key={list ? 0 : 1}
          numColumns={list ? 1 : 2}
        ></FlatList>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#393e46",
    padding: 10,
    alignItems: "flex-end",
  },
  contains: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    color: "#f39233",
  },
});

export default EventsListScreen;
