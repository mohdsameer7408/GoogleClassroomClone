import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const ClassroomButton = ({ buttonText, onPress }) => {
  return (
    <TouchableComponent
      containerStyle={styles.createButton}
      wrapperStyle={styles.createButtonWrapper}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableComponent>
  );
};

export default ClassroomButton;

const styles = StyleSheet.create({
  createButton: {
    width: width * 0.23,
    height: 40,
    borderRadius: 4,
  },
  createButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A73E8",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
