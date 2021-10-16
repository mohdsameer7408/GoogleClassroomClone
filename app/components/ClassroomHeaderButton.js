import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const ClassroomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={26}
      color="#555"
      IconComponent={Ionicons}
    />
  );
};

export default ClassroomHeaderButton;
