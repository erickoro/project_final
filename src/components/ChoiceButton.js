import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { stylesMain } from "./ChoiceButton.styles";

const ChoiceButton = ({ image, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <Card style={stylesMain.choiceCard}>
        <Card.Cover source={image} style={stylesMain.choiceImage} />
      </Card>
    </TouchableOpacity>
  );
};

export default ChoiceButton;
