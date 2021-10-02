import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const TouchableComponent = ({
  containerStyle,
  wrapperStyle,
  children,
  onPress,
}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableComponent style={{ flex: 1 }} useForeground onPress={onPress}>
        <View style={[styles.wrapper, wrapperStyle]}>{children}</View>
      </TouchableComponent>
    </View>
  );
};

export default TouchableComponent;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  wrapper: {
    width: "100%",
    height: "100%",
  },
});
