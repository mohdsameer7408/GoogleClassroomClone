import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const ClassroomCard = () => {
  return (
    <TouchableComponent containerStyle={styles.card} onPress={() => {}}>
      <ImageBackground
        style={styles.cardWrapper}
        resizeMode="cover"
        source={{
          uri: "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.classDetails}>
            <View style={styles.detailsLeft}>
              <Text style={styles.classTitle}>Android App Dev</Text>
              <Text style={styles.classDescription}>CS 7th Sem</Text>
            </View>
            <TouchableComponent
              containerStyle={styles.detailsRight}
              wrapperStyle={styles.detailsRight}
            >
              <MaterialIcons name="more-vert" color="#fff" size={24} />
            </TouchableComponent>
          </View>
          <Text style={styles.facultyName}>John Smith</Text>
        </View>
      </ImageBackground>
    </TouchableComponent>
  );
};

export default ClassroomCard;

const styles = StyleSheet.create({
  card: {
    width: width * 0.97,
    height: 140,
    borderRadius: 8,
  },
  cardWrapper: {
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  classDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsLeft: {},
  classTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
  },
  classDescription: {
    color: "#fff",
  },
  detailsRight: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  facultyName: {
    fontSize: 12,
    color: "#fff",
  },
});
