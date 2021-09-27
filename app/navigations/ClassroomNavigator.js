import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./HomeStack";

const ClassroomNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeStack />
    </NavigationContainer>
  );
};

export default ClassroomNavigator;
