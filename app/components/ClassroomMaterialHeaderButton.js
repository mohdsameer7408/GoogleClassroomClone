import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ClassroomMaterialHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={26}
      color="#fff"
      IconComponent={MaterialCommunityIcons}
    />
  );
};

export default ClassroomMaterialHeaderButton;
