import React from "react";
import { Image, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import GradientButton from "../../components/GradientButton";
import { styles } from "./HomeScreen.styles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.replace("Login");
  };

  const goToRegister = () => {
    navigation.replace("Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Hello!</Text>
        <Image
          source={require("../../../assets/rock-paper-scissors.svg")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>Enjoy Rock, Paper, Scissors, Shoot!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton action={goToLogin} text="Login" color="yellow" />
        <GradientButton
          action={goToRegister}
          text="Register"
          color="flatgreen"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
