import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ClassroomCard from "../components/ClassroomCard";

const HomeScreen = () => {
  return (
    <FlatList
      contentContainerStyle={styles.homeScreen}
      data={Array(10).fill()}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => <ClassroomCard />}
      ItemSeparatorComponent={() => (
        <View style={{ width: "100%", height: 10 }} />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
  },
});
