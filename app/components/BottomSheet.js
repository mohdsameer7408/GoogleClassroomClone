import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import TouchableComponent from "./TouchableComponent";

const BottomSheet = ({ isSheetOpened, closeSheet }) => {
  return (
    <Modal
      visible={isSheetOpened}
      transparent
      statusBarTranslucent
      animationType="slide"
    >
      <Pressable style={{ flex: 1 }} onPress={closeSheet}>
        <View style={styles.bottomSheet}>
          <Pressable onPress={() => {}}>
            <View style={styles.bottomSheetWrapper}>
              <TouchableComponent
                containerStyle={styles.button}
                wrapperStyle={styles.buttonWrapper}
                onPress={() => {}}
              >
                <Text style={styles.buttonText}>Create Class</Text>
              </TouchableComponent>
              <TouchableComponent
                containerStyle={styles.button}
                wrapperStyle={styles.buttonWrapper}
                onPress={() => {}}
              >
                <Text style={styles.buttonText}>Join Class</Text>
              </TouchableComponent>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheetWrapper: {
    width: "100%",
    paddingVertical: 14,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 40,
    marginBottom: 4,
  },
  buttonWrapper: {
    justifyContent: "center",
    paddingLeft: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 15,
  },
});
