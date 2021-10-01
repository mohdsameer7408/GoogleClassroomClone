import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CalendarScreen = () => {
  return (
    <View style={styles.calendarScreen}>
      <Text>CalendarScreen</Text>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendarScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
