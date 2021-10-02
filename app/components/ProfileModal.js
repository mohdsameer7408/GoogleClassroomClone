import React from "react";
import {
  Dimensions,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import TouchableComponent from "./TouchableComponent";

const { width } = Dimensions.get("window");

const ProfileModal = ({ isOpened, closeProfile }) => {
  return (
    <Modal
      visible={isOpened}
      animationType="fade"
      statusBarTranslucent
      transparent
    >
      <Pressable style={{ flex: 1 }} onPress={closeProfile}>
        <View style={styles.profileContainer}>
          <Pressable style={styles.profileCard} onPress={() => {}}>
            <View style={styles.profileCardWrapper}>
              <View style={styles.header}>
                <TouchableComponent
                  containerStyle={styles.closeButton}
                  wrapperStyle={styles.closeButtonWrapper}
                  onPress={closeProfile}
                >
                  <Text style={styles.closeButtonText}>&times;</Text>
                </TouchableComponent>
                <Image
                  resizeMode="contain"
                  style={styles.logo}
                  source={require("../assets/images/google-logo.png")}
                />
                <View style={styles.profileDetails}>
                  <Image
                    resizeMode="cover"
                    style={styles.userImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
                    }}
                  />
                  <View style={styles.userData}>
                    <Text style={styles.userName}>John Smith</Text>
                    <Text style={styles.userEmail}>johnsmith@gmail.com</Text>
                  </View>
                </View>
                <TouchableComponent
                  containerStyle={styles.accountButton}
                  wrapperStyle={styles.accountButtonWrapper}
                >
                  <Text>Manage your Google Account</Text>
                </TouchableComponent>
              </View>
              <View style={styles.middle}>
                <TouchableComponent
                  containerStyle={styles.actionButton}
                  wrapperStyle={styles.actionButtonWrapper}
                >
                  <MaterialCommunityIcons
                    name="account-plus-outline"
                    size={22}
                  />
                  <Text style={styles.actionButtonText}>
                    Add another account
                  </Text>
                </TouchableComponent>
                <TouchableComponent
                  containerStyle={styles.actionButton}
                  wrapperStyle={styles.actionButtonWrapper}
                >
                  <MaterialCommunityIcons
                    name="account-cog-outline"
                    size={22}
                  />
                  <Text style={styles.actionButtonText}>
                    Add another account
                  </Text>
                </TouchableComponent>
              </View>
              <View style={styles.footer}>
                <Text style={styles.policy}>Privacy Policy</Text>
                <Entypo name="dot-single" size={20} style={styles.period} />
                <Text style={styles.policy}>Terms of Service</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 70,
  },
  profileCard: {
    overflow: "hidden",
    width: width * 0.9,
    borderRadius: 8,
  },
  profileCardWrapper: {
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  closeButton: {
    position: "absolute",
    left: 10,
    top: 6,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  closeButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 36,
  },
  logo: {
    width: 70,
    height: 28,
  },
  profileDetails: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  userImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  userData: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "900",
  },
  userEmail: {
    color: "#555",
    fontSize: 12,
  },
  accountButton: {
    width: "70%",
    height: 30,
    borderRadius: 14,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  accountButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  actionButton: {
    width: "100%",
    height: 46,
  },
  actionButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  actionButtonText: {
    marginLeft: 14,
  },
  footer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  policy: {
    color: "#333",
    fontSize: 13,
  },
  period: {
    marginHorizontal: 6,
  },
});
