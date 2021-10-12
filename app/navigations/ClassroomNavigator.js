import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { OverflowMenuProvider } from "react-navigation-header-buttons";

import ClassroomDrawer from "./ClassroomDrawer";

const ClassroomNavigator = () => {
  return (
    <OverflowMenuProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <ClassroomDrawer />
      </NavigationContainer>
    </OverflowMenuProvider>
  );
};

export default ClassroomNavigator;
