import React, { useState, useCallback, useLayoutEffect } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import {
  HeaderButtons,
  HiddenItem,
  Item,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import FeedbackPopup from "../components/FeedbackPopup";
import ClassroomMaterialHeaderButton from "../components/ClassroomMaterialHeaderButton";

const { width } = Dimensions.get("window");
let popupId = null;

const ShareScreen = ({ navigation }) => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [postText, setPostText] = useState("");

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
        <HeaderButtons HeaderButtonComponent={ClassroomMaterialHeaderButton}>
          <Item title="attachment" iconName="attachment" onPress={() => {}} />
          <Item
            title="post"
            iconName="send"
            onPress={() => navigation.goBack()}
          />
          <OverflowMenu
            OverflowIcon={
              <MaterialIcons name="more-vert" color="#fff" size={26} />
            }
          >
            <HiddenItem title="Send Google feedback" onPress={sendFeedback} />
          </OverflowMenu>
        </HeaderButtons>
      ),
    });
  }, [navigation, sendFeedback]);

  return (
    <View style={styles.shareScreen}>
      <TextInput
        placeholder="Share with your class"
        style={styles.shareInput}
        value={postText}
        onChangeText={setPostText}
      />
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
    </View>
  );
};

export default ShareScreen;

const styles = StyleSheet.create({
  shareScreen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  shareInput: {
    width: width * 0.92,
    height: 46,
    borderBottomWidth: 2,
    borderColor: "#1A73E8",
  },
});
