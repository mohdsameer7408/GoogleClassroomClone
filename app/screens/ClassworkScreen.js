import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ClassworkScreen = () => {
  return (
    <View style={styles.classworkScreen}>
      <Text>ClassworkScreen</Text>
    </View>
  );
};

export default ClassworkScreen;

const styles = StyleSheet.create({
  classworkScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
