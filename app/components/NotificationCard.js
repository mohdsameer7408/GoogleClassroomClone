import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const NotificationCard = () => {
  return (
    <TouchableComponent
      containerStyle={styles.notificationCard}
      wrapperStyle={styles.notificationCardWrapper}
    >
      <Image
        resizeMode="cover"
        style={styles.userImage}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
        }}
      />
      <View style={styles.cardRight}>
        <View style={styles.notificationDetails}>
          <Text style={styles.userName}>John Smith</Text>
          <Text style={styles.date}>Oct 7</Text>
        </View>
        <Text style={styles.notificationDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          voluptas!
        </Text>
      </View>
    </TouchableComponent>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  notificationCard: {
    width,
    height: 72,
  },
  notificationCardWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  userImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  cardRight: {
    flex: 1,
    marginLeft: 12,
  },
  notificationDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontWeight: "bold",
  },
  date: {
    color: "#555",
    fontSize: 12,
  },
  notificationDescription: {
    fontWeight: "bold",
  },
});
