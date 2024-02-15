import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./GradientButton.style";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ text, action, color }) => {
  const pallete = {
    green: ["#AEE9AF", "#AEE9AF"],
    yellow: ["#FED754", "#FFCA28"],
  };
  console.log(pallete[color]);
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <LinearGradient
        colors={pallete[color]} // Warna gradient sesuaikan dengan tema hijau army yang diinginkan
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
