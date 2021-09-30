import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HeaderButtons,
  HiddenItem,
  Item,
  OverflowMenu,
  OverflowMenuProvider,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ClassroomHeaderButton from "../components/ClassroomHeaderButton";

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
            headerRight: () => (
              <>
                <HeaderButtons HeaderButtonComponent={ClassroomHeaderButton}>
                  <Item
                    title="user"
                    iconName="person-circle"
                    onPress={() => {}}
                  />
                </HeaderButtons>
                <OverflowMenu
                  OverflowIcon={
                    <MaterialIcons name="more-vert" color="#000" size={26} />
                  }
                >
                  <HiddenItem title="Refresh" />
                  <HiddenItem title="Send Google feedback" />
                </OverflowMenu>
              </>
            ),
          }}
        />
      </Stack.Navigator>
    </OverflowMenuProvider>
  );
};

export default HomeStack;
