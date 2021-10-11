import React, { useCallback, useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  HeaderButtons,
  HiddenItem,
  Item,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import FeedbackPopup from "../components/FeedbackPopup";
import ClassworkCard from "../components/ClassworkCard";

let timeoutId = null;
let popupId = null;

const ClassworkScreen = ({ navigation }) => {
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
        <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
          <Item title="filter" iconName="filter-outline" onPress={() => {}} />
          <Item title="work" iconName="person-outline" onPress={() => {}} />
          <OverflowMenu
            OverflowIcon={
              <MaterialIcons name="more-vert" color="#000" size={26} />
            }
          >
            <HiddenItem title="Refresh" onPress={updateStream} />
            <HiddenItem title="Send Google feedback" onPress={sendFeedback} />
          </OverflowMenu>
        </HeaderButtons>
      ),
    });
  }, [navigation, updateStream, sendFeedback]);

  return (
    <View style={styles.classworkScreen}>
      <FlatList
        onRefresh={updateStream}
        refreshing={isSteamUpdating}
        contentContainerStyle={styles.classworkList}
        data={Array(10).fill()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <ClassworkCard />}
      />
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
    </View>
  );
};

export default ClassworkScreen;

const styles = StyleSheet.create({
  classworkScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  classworkList: {
    alignItems: "center",
    paddingVertical: 10,
  },
});
