import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ClassroomCard from "../components/ClassroomCard";
import FloatingButton from "../components/FloatingButton";

let timeoutId = null;

const HomeScreen = () => {
  const [isSteamUpdating, setIsSteamUpdating] = useState(false);

  const updateStream = async () => {
    setIsSteamUpdating(true);
    timeoutId = setTimeout(() => {
      setIsSteamUpdating(false);
      clearTimeout(timeoutId);
    }, 1000);
  };

  return (
    <View style={styles.homeScreen}>
      <FlatList
        contentContainerStyle={styles.classList}
        refreshing={isSteamUpdating}
        onRefresh={updateStream}
        data={Array(10).fill()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <ClassroomCard />}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 10 }} />
        )}
      />
      <FloatingButton onButtonPress={() => {}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  classList: {
    paddingVertical: 10,
    alignItems: "center",
  },
});
