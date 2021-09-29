import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

const ClassroomDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default ClassroomDrawer;
