import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import ClassworkScreen from "../screens/ClassworkScreen";
import PeopleScreen from "../screens/PeopleScreen";
import StreamStack from "./StreamStack";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";

const Tab = createBottomTabNavigator();

const ClassroomTab = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        title: "Android App Dev",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
            <Item
              title="menu"
              iconName="menu"
              onPress={() => navigation.openDrawer()}
            />
          </HeaderButtons>
        ),
        tabBarActiveTintColor: "#1A73E8",
        tabBarInactiveTintColor: "#555",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "StreamStack") {
            return (
              <MaterialCommunityIcons
                name="message-outline"
                color={color}
                size={size}
              />
            );
          } else if (route.name === "ClassworkScreen") {
            return (
              <Foundation name="clipboard-notes" color={color} size={size} />
            );
          } else if (route.name === "PeopleScreen") {
            return (
              <MaterialIcons name="people-outline" color={color} size={size} />
            );
          }

          return;
        },
      })}
    >
      <Tab.Screen
        name="StreamStack"
        component={StreamStack}
        options={{ tabBarLabel: "Stream", headerShown: false }}
      />
      <Tab.Screen
        name="ClassworkScreen"
        component={ClassworkScreen}
        options={{ tabBarLabel: "Classwork" }}
      />
      <Tab.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{ tabBarLabel: "People" }}
      />
    </Tab.Navigator>
  );
};

export default ClassroomTab;
