import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { HiddenItem, OverflowMenu } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import FeedbackPopup from "../components/FeedbackPopup";
import TouchableComponent from "../components/TouchableComponent";

let popupId = null;
const { width } = Dimensions.get("window");

const JoinClassScreen = ({ navigation }) => {
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
            <Text style={styles.buttonText}>Join</Text>
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
    <View style={styles.joinClassScreen}>
      <View style={styles.joinClassScreenWrapper}>
        <Text style={styles.title}>You're currently singned in as</Text>
        <View style={styles.profileDetails}>
          <Image
            resizeMode="cover"
            style={styles.userImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
            }}
          />
          <View style={styles.userData}>
            <Text style={styles.userName}>John Smith</Text>
            <Text style={styles.userEmail}>johnsmith@gmail.com</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Ask you teacher for the class code then enter it here.
        </Text>
        <TextInput placeholder="Class code" style={styles.input} />
        <Text style={styles.title}>To signin with a class code</Text>
        <Text style={styles.description}>
          {"\u2022"} Use an authorized account
        </Text>
        <Text style={styles.description}>
          {"\u2022"} Use a class code, with 6-7 letters and numbers, and no
          spaces or symbols
        </Text>
        <Text style={styles.description}>
          If you are having trouble joining the class, go to the{" "}
          <Text style={styles.link}>Help Center article</Text>
        </Text>
      </View>
      {isPopupActive && <FeedbackPopup message="Sending Feedback..." />}
    </View>
  );
};

export default JoinClassScreen;

const styles = StyleSheet.create({
  joinClassScreen: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  joinClassScreenWrapper: {
    width: width * 0.9,
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
  title: {
    color: "#222",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  profileDetails: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 10,
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  userImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  userData: {
    marginLeft: 14,
  },
  userName: {
    fontWeight: "900",
  },
  userEmail: {
    color: "#555",
    fontSize: 12,
  },
  description: {
    color: "#444",
    marginVertical: 6,
  },
  input: {
    width: "100%",
    height: 56,
    marginVertical: 20,
    borderWidth: 1.5,
    marginBottom: 16,
    borderColor: "#777",
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  link: {
    color: "#1A73E8",
  },
});
