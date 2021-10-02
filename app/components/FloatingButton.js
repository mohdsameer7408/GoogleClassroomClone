import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TouchableComponent from "./TouchableComponent";

const FloatingButton = ({ onButtonPress }) => {
  return (
    <TouchableComponent
      containerStyle={styles.floatingButton}
      wrapperStyle={styles.floatingButtonWrapper}
      onPress={onButtonPress}
    >
      <Ionicons name="add" color="#1A73E8" size={32} />
    </TouchableComponent>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.26,
    shadowRadius: 20,
    elevation: 8,
  },
  floatingButtonWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
