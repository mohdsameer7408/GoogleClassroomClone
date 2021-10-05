import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FeedbackPopup = () => {
  return (
    <View style={styles.popupContainer}>
      <Text>Sending Feedback...</Text>
    </View>
  );
};

export default FeedbackPopup;

const styles = StyleSheet.create({
  popupContainer: {
    position: "absolute",
    bottom: 60,
    width: 200,
    height: 40,
    borderRadius: 22,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666",
  },
});
