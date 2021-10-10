import React, { useCallback, useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HiddenItem, OverflowMenu } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import FeedbackPopup from "../components/FeedbackPopup";
import PeopleCard from "../components/PeopleCard";

let timeoutId = null;
let popupId = null;

const PeopleScreen = ({ navigation }) => {
  const [isSteamUpdating, setIsSteamUpdating] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const updateStream = useCallback(async () => {
    setIsSteamUpdating(true);
    timeoutId = setTimeout(() => {
      setIsSteamUpdating(false);
      clearTimeout(timeoutId);
    }, 1000);
  }, [setIsSteamUpdating]);

  const sendFeedback = useCallback(async () => {
    setIsPopupActive(true);
    popupId = setTimeout(() => {
      setIsPopupActive(false);
      clearTimeout(popupId);
    }, 1000);
  }, [setIsPopupActive]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <OverflowMenu
          OverflowIcon={
            <MaterialIcons name="more-vert" color="#000" size={26} />
          }
        >
          <HiddenItem title="Refresh" onPress={updateStream} />
          <HiddenItem title="Send Google feedback" onPress={sendFeedback} />
        </OverflowMenu>
      ),
    });
  }, [navigation, updateStream, sendFeedback]);

  return (
    <View style={styles.peopleScreen}>
      <FlatList
        onRefresh={updateStream}
        refreshing={isSteamUpdating}
        contentContainerStyle={styles.peopleList}
        data={Array(20).fill()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index }) => (
          <PeopleCard
            isHeader={index === 0 || index === 3}
            headerTitle={index === 0 ? "Teachers" : "Classmates"}
          />
        )}
      />
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  peopleScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  peopleList: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
