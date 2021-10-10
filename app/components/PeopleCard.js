import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const PeopleCard = ({ isHeader, headerTitle }) => {
  return isHeader ? (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  ) : (
    <TouchableComponent
      containerStyle={styles.peopleCard}
      wrapperStyle={styles.peopleCardWrapper}
    >
      <Image
        resizeMode="cover"
        style={styles.userImage}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
        }}
      />
      <Text style={styles.userName}>John Smith</Text>
    </TouchableComponent>
  );
};

export default PeopleCard;

const styles = StyleSheet.create({
  headerContainer: {
    width: width * 0.9,
    height: 70,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#2653d9",
  },
  headerTitle: {
    color: "#2653d9",
    fontSize: 23,
    fontWeight: "900",
  },
  peopleCard: {
    width: width * 0.9,
    height: 60,
  },
  peopleCardWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  userName: {
    marginLeft: 18,
    fontSize: 15,
    fontWeight: "900",
  },
});
