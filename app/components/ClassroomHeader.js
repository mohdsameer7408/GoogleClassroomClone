import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const ClassroomHeader = ({ openShare }) => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.header}
        resizeMode="cover"
        source={{
          uri: "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
      >
        <View style={styles.overlayContainer}>
          <Text style={styles.subject}>Android App Dev</Text>
          <Text style={styles.className}>CSE</Text>
        </View>
      </ImageBackground>
      <TouchableComponent
        containerStyle={styles.shareContainer}
        wrapperStyle={styles.shareWrapper}
        onPress={openShare}
      >
        <Image
          style={styles.profileImage}
          resizeMode="cover"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
          }}
        />
        <Text style={styles.inputText}>Share with your class...</Text>
      </TouchableComponent>
    </View>
  );
};

export default ClassroomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10,
  },
  header: {
    overflow: "hidden",
    width: width * 0.96,
    height: 110,
    borderRadius: 8,
    marginBottom: 10,
  },
  overlayContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
  },
  subject: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  className: {
    color: "#fff",
    fontWeight: "bold",
  },
  shareContainer: {
    width: width * 0.96,
    height: 70,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 6,
  },
  shareWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  inputText: {
    flex: 1,
    marginLeft: 16,
    color: "#888",
    fontSize: 12,
  },
});
