import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import ClassroomHeaderButtonLight from "../components/ClassroomHeaderButtonLight";
import ClassroomScreen from "../screens/ClassroomScreen";
import ShareScreen from "../screens/ShareScreen";

const Stack = createStackNavigator();

const StreamStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
            <Item
              title="menu"
              iconName="menu"
              onPress={() => navigation.openDrawer()}
            />
          </HeaderButtons>
        ),
      }}
    >
      <Stack.Screen
        name="ClassroomScreen"
        component={ClassroomScreen}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="ShareScreen"
        component={ShareScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerStyle: { backgroundColor: "#1A73E8" },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ClassroomHeaderButtonLight}>
              <Item
                title="close"
                iconName="close-sharp"
                onPress={() => navigation.goBack()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StreamStack;
