import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./GradientButton.style";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ text, action, color }) => {
  const pallete = {
    flatgreen: ["#AEE9AF", "#AEE9AF"],
    green: ["#4CAF50", "#2E7D32"],
    yellow: ["#FED754", "#FFCA28"],
  };
  
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <LinearGradient
        colors={pallete[color]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
