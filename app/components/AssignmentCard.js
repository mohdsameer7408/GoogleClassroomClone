import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const AssignmentCard = () => {
  return (
    <TouchableComponent containerStyle={styles.assignmentCard}>
      <View style={styles.cardTop}>
        <View style={styles.cardImage}>
          <Foundation name="clipboard-notes" color="#fff" size={30} />
        </View>
        <View style={styles.cardRight}>
          <Text style={styles.title}>New Assignment: CS 74 ST1</Text>
          <Text style={styles.date}>Oct 12</Text>
        </View>
      </View>
      <TouchableComponent
        containerStyle={styles.cardBottom}
        wrapperStyle={styles.cardBottomWrapper}
      >
        <Text style={styles.comment}>Add class comment</Text>
      </TouchableComponent>
    </TouchableComponent>
  );
};

export default AssignmentCard;

const styles = StyleSheet.create({
  assignmentCard: {
    width: width * 0.96,
    height: 130,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  cardTop: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  cardImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#1A73E8",
    justifyContent: "center",
    alignItems: "center",
  },
  cardRight: {
    marginLeft: 16,
  },
  date: {
    color: "#555",
    fontSize: 12,
  },
  cardBottom: {
    height: 50,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  cardBottomWrapper: {
    justifyContent: "center",
    paddingLeft: 20,
  },
  comment: {
    color: "#888",
    fontSize: 12,
  },
});
