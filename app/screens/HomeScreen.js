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

let timeoutId = null;

const HomeScreen = ({ navigation }) => {
  const [isSteamUpdating, setIsSteamUpdating] = useState(false);
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isSheetOpened, setIsSheetOpened] = useState(false);

  const updateStream = useCallback(async () => {
    setIsSteamUpdating(true);
    timeoutId = setTimeout(() => {
      setIsSteamUpdating(false);
      clearTimeout(timeoutId);
    }, 1000);
  }, [setIsSteamUpdating]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
            <Item
              title="user"
              iconName="person-circle"
              onPress={() => setIsProfileOpened(true)}
            />
          </HeaderButtons>
          <OverflowMenu
            OverflowIcon={
              <MaterialIcons name="more-vert" color="#000" size={26} />
            }
          >
            <HiddenItem title="Refresh" onPress={updateStream} />
            <HiddenItem title="Send Google feedback" />
          </OverflowMenu>
        </>
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
        renderItem={() => <ClassroomCard />}
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
      />
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
