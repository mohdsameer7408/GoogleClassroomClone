import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HeaderButtons,
  Item,
  OverflowMenuProvider,
} from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import ClassroomTab from "./ClassroomTab";

const Stack = createStackNavigator();

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
            headerTitle: "Google Classroom",
          }}
        />
        <Stack.Screen
          name="ClassroomTab"
          component={ClassroomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </OverflowMenuProvider>
  );
};

export default HomeStack;
