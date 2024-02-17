import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { stylesMain } from "./ChoiceButton.styles";

const ChoiceButton = ({ image, action }) => {
  return (
    <TouchableOpacity onPress={action} style={stylesMain.choiceButton}>
      <Image source={image} style={stylesMain.choiceImage} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default ChoiceButton;
