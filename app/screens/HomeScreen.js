import React, { useLayoutEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  HeaderButtons,
  HiddenItem,
  Item,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import ClassroomCard from "../components/ClassroomCard";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import FloatingButton from "../components/FloatingButton";
import ProfileModal from "../components/ProfileModal";
import BottomSheet from "../components/BottomSheet";
import FeedbackPopup from "../components/FeedbackPopup";

let timeoutId = null;
let popupId = null;

const HomeScreen = ({ navigation }) => {
  const [isSteamUpdating, setIsSteamUpdating] = useState(false);
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isSheetOpened, setIsSheetOpened] = useState(false);
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
            title="user"
            iconName="person-circle"
            onPress={() => setIsProfileOpened(true)}
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
  }, [navigation, setIsProfileOpened, updateStream]);

  return (
    <View style={styles.homeScreen}>
      <FlatList
        contentContainerStyle={styles.classList}
        refreshing={isSteamUpdating}
        onRefresh={updateStream}
        data={Array(10).fill()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index }) => (
          <ClassroomCard
            openClassroom={() =>
              navigation.navigate("ClassroomTab", {
                screen: "StreamStack",
                params: {
                  screen: "ClassroomScreen",
                  params: { posts: index !== 2 },
                },
              })
            }
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 10 }} />
        )}
      />
      <FloatingButton onButtonPress={() => setIsSheetOpened(true)} />
      <ProfileModal
        isOpened={isProfileOpened}
        closeProfile={() => setIsProfileOpened(false)}
      />
      <BottomSheet
        isSheetOpened={isSheetOpened}
        closeSheet={() => setIsSheetOpened(false)}
        openCreateClass={() => navigation.navigate("CreateClassScreen")}
        openJoinClass={() => navigation.navigate("JoinClassScreen")}
      />
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
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
