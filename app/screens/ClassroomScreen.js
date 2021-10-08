import React, { useCallback, useLayoutEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  HeaderButtons,
  HiddenItem,
  Item,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import ClassroomHeader from "../components/ClassroomHeader";

const { width } = Dimensions.get("window");
let timeoutId = null;
let popupId = null;

const ClassroomScreen = ({ navigation }) => {
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
        <>
          <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
            <Item
              title="user"
              iconName="information-circle-outline"
              onPress={() => {}}
            />
          </HeaderButtons>
          <OverflowMenu
            OverflowIcon={
              <MaterialIcons name="more-vert" color="#000" size={26} />
            }
          >
            <HiddenItem title="Refresh" onPress={updateStream} />
            <HiddenItem title="Send Google feedback" onPress={sendFeedback} />
          </OverflowMenu>
        </>
      ),
    });
  }, [navigation, updateStream, sendFeedback]);

  return (
    <View style={styles.classroomScreen}>
      <ClassroomHeader />
    </View>
  );
};

export default ClassroomScreen;

const styles = StyleSheet.create({
  classroomScreen: {
    flex: 1,
    alignItems: "center",
  },
});
