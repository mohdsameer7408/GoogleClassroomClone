import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ClassroomScreen from "../screens/ClassroomScreen";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import { createStackNavigator } from "@react-navigation/stack";

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
    </Stack.Navigator>
  );
};

export default StreamStack;
