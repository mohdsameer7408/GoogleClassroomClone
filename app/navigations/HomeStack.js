import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";
import ClassroomTab from "./ClassroomTab";
import CreateClassScreen from "../screens/CreateClassScreen";
import JoinClassScreen from "../screens/JoinClassScreen";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
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
      <Stack.Screen
        name="CreateClassScreen"
        component={CreateClassScreen}
        options={() => ({
          headerTitle: "Create Class",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
              <Item
                title="close"
                iconName="close-sharp"
                onPress={() => navigation.goBack()}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="JoinClassScreen"
        component={JoinClassScreen}
        options={() => ({
          headerTitle: "Join Class",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
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

export default HomeStack;
