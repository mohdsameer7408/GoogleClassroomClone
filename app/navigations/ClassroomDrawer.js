import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DrawerContent from "./DrawerContent";
import HomeStack from "./HomeStack";
import CalendarScreen from "../screens/CalendarScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";

const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("window");

const ClassroomDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "transparent",
        drawerActiveTintColor: "#1A73E8",
        drawerInactiveTintColor: "#000",
        drawerStyle: {
          width: width * 0.75,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={size}
            />
          ),
          drawerLabel: "Classes",
        }}
      />
      <Drawer.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-today" color={color} size={size} />
          ),
          drawerLabel: "Calendar",
        }}
      />
      <Drawer.Screen
        name="NotoficationScreen"
        component={NotificationScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
          drawerLabel: "Notifications",
          headerShown: true,
          headerTitle: "Notifications",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
              <Item
                title="close"
                iconName="close-sharp"
                onPress={() => navigation.goBack()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default ClassroomDrawer;
