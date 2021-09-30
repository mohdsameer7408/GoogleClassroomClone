import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const FloatingButton = ({ onButtonPress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.floatingButton}>
      <TouchableComponent
        useForeground
        style={{ flex: 1 }}
        onPress={onButtonPress}
      >
        <View style={styles.floatingButtonWrapper}>
          <Ionicons name="add" color="#1A73E8" size={32} />
        </View>
      </TouchableComponent>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  floatingButton: {
    overflow: "hidden",
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.26,
    shadowRadius: 20,
    elevation: 8,
  },
  floatingButtonWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
