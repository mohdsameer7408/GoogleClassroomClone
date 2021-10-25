import React, { useCallback, useLayoutEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { HiddenItem, OverflowMenu } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import FeedbackPopup from "../components/FeedbackPopup";
import TouchableComponent from "../components/TouchableComponent";

let popupId = null;
const { width } = Dimensions.get("window");

const CreateClassScreen = ({ navigation }) => {
  const [isPopupActive, setIsPopupActive] = useState(false);

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
        <View style={styles.headerRightContainer}>
          <TouchableComponent
            containerStyle={styles.createButton}
            wrapperStyle={styles.createButtonWrapper}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableComponent>
          <OverflowMenu
            OverflowIcon={
              <MaterialIcons name="more-vert" color="#000" size={26} />
            }
          >
            <HiddenItem title="Send Google feedback" onPress={sendFeedback} />
          </OverflowMenu>
        </View>
      ),
    });
  }, [navigation, sendFeedback]);

  return (
    <View style={styles.createClassScreen}>
      <TextInput placeholder="Class name (required)" style={styles.input} />
      <TextInput placeholder="Section" style={styles.input} />
      <TextInput placeholder="Room" style={styles.input} />
      <TextInput placeholder="Subject" style={styles.input} />
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
    </View>
  );
};

export default CreateClassScreen;

const styles = StyleSheet.create({
  createClassScreen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  headerRightContainer: {
    flexDirection: "row",
  },
  createButton: {
    width: width * 0.23,
    height: 40,
    borderRadius: 4,
  },
  createButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A73E8",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    width: width * 0.95,
    height: 50,
    borderWidth: 2,
    marginBottom: 16,
    borderColor: "#1A73E8",
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
  },
});
