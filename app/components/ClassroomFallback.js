import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ClassroomFallback = ({ message }) => {
  return (
    <View style={styles.fallbackContainer}>
      <SimpleLineIcons name="note" size={40} color="#888" />
      <Text style={styles.fallbackText}>{message}</Text>
    </View>
  );
};

export default ClassroomFallback;

const styles = StyleSheet.create({
  fallbackContainer: {
    width,
    height: height - 260,
    alignItems: "center",
    paddingTop: height * 0.1,
  },
  fallbackText: {
    marginTop: 20,
    color: "#555",
    fontSize: 12,
  },
});
