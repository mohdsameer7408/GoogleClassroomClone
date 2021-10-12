import React, { useState, useCallback, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  HeaderButtons,
  HiddenItem,
  Item,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import FeedbackPopup from "../components/FeedbackPopup";
import NotificationCard from "../components/NotificationCard";

let timeoutId = null;
let popupId = null;

const NotificationScreen = ({ navigation }) => {
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
          <Text style={styles.headerButtonText}>All</Text>
          <Item title="down-arrow" iconName="caret-down" onPress={() => {}} />
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
    <View style={styles.notificationScreen}>
      <FlatList
        onRefresh={updateStream}
        refreshing={isSteamUpdating}
        contentContainerStyle={styles.notificationList}
        data={Array(16).fill()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <NotificationCard />}
      />
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notificationScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  notificationList: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerButtonText: {
    fontSize: 16,
    alignSelf: "center",
  },
});
