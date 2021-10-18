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
import ClassroomHeader from "../components/ClassroomHeader";
import FeedbackPopup from "../components/FeedbackPopup";
import AssignmentCard from "../components/AssignmentCard";
import ClassroomFallback from "../components/ClassroomFallback";

let timeoutId = null;
let popupId = null;

const ClassroomScreen = ({ navigation, route }) => {
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
          <Item
            title="info"
            iconName="information-circle-outline"
            onPress={() => {}}
          />
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
    <View style={styles.classroomScreen}>
      {route.params.posts ? (
        <FlatList
          contentContainerStyle={styles.classroomScreenList}
          onRefresh={updateStream}
          refreshing={isSteamUpdating}
          data={Array(10).fill()}
          keyExtractor={(_, index) => index.toString()}
          ListHeaderComponent={
            <ClassroomHeader
              openShare={() => navigation.navigate("ShareScreen")}
            />
          }
          ItemSeparatorComponent={() => (
            <View style={{ width: "100%", height: 10 }} />
          )}
          renderItem={() => <AssignmentCard />}
        />
      ) : (
        <View style={styles.classroomScreenList}>
          <ClassroomHeader />
          <ClassroomFallback message="No posts yet, but check back soon" />
        </View>
      )}
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
    </View>
  );
};

export default ClassroomScreen;

const styles = StyleSheet.create({
  classroomScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  classroomScreenList: {
    alignItems: "center",
  },
});
