import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";

import ClassroomNavigator from "./app/navigations/ClassroomNavigator";

enableScreens();

export default function App() {
  return <ClassroomNavigator />;
}
