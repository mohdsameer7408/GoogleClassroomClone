import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const ClassworkCard = () => {
  return (
    <TouchableComponent
      containerStyle={styles.classworkCard}
      wrapperStyle={styles.classworkCardWrapper}
    >
      <View style={styles.cardLeft}>
        <Foundation name="clipboard-notes" color="#fff" size={30} />
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.title}>CS 74 ST1</Text>
        <Text style={styles.date}>No due date</Text>
      </View>
    </TouchableComponent>
  );
};

export default ClassworkCard;

const styles = StyleSheet.create({
  classworkCard: {
    width: width * 0.9,
    height: 64,
    backgroundColor: "#fff",
  },
  classworkCardWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardLeft: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  cardRight: {
    marginLeft: 20,
  },
  title: {},
  date: {
    color: "#999",
    fontSize: 11,
  },
});
