import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const ClassroomHeaderButtonLight = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={26}
      color="#fff"
      IconComponent={Ionicons}
    />
  );
};

export default ClassroomHeaderButtonLight;
