import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import ClassroomDrawer from "./ClassroomDrawer";

const ClassroomNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ClassroomDrawer />
    </NavigationContainer>
  );
};

export default ClassroomNavigator;
