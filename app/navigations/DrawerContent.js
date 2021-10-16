import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const DrawerContent = (porps) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/images/google-logo.png")}
        />
        <Text style={styles.headerTitle}>Classroom</Text>
      </View>
      <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerNavigations}>
            <DrawerItemList {...porps} />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    height: 80,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  logo: {
    width: 70,
    height: 24,
    marginRight: 6,
  },
  headerTitle: {
    fontSize: 19,
    marginBottom: 5,
  },
  drawerContent: {
    flex: 1,
  },
  drawerNavigations: {
    paddingBottom: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
