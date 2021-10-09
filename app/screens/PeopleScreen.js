import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PeopleScreen = () => {
  return (
    <View style={styles.peopleScreen}>
      <Text>PeopleScreen</Text>
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  peopleScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
