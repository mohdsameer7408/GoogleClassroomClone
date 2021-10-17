import React from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

import TouchableComponent from "./TouchableComponent";

const { width, height } = Dimensions.get("window");

const UnenrollButton = ({ dismiss }) => {
  return (
    <>
      <Pressable style={styles.overlay} onPress={dismiss}></Pressable>
      <TouchableComponent
        containerStyle={styles.unenrollButton}
        wrapperStyle={styles.unenrollButtonWrapper}
      >
        <Text style={styles.buttonText}>Unenroll</Text>
      </TouchableComponent>
    </>
  );
};

export default UnenrollButton;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
  },
  unenrollButton: {
    position: "absolute",
    top: 60,
    right: 0,
    width: width * 0.38,
    height: 53,
    borderRadius: 4,
  },
  unenrollButtonWrapper: {
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 16,
  },
});
