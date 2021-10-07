import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HeaderButtons,
  Item,
  OverflowMenuProvider,
} from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import ClassroomScreen from "../screens/ClassroomScreen";

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <OverflowMenuProvider>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
              <Item
                title="menu"
                iconName="menu"
                onPress={() => navigation.openDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Google Classroom",
          }}
        />
        <Stack.Screen
          name="ClassroomScreen"
          component={ClassroomScreen}
          options={{
            title: "",
          }}
        />
      </Stack.Navigator>
    </OverflowMenuProvider>
  );
};

export default HomeStack;
