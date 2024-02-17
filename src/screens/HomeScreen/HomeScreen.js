import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import GradientButton from "../../components/GradientButton";
import { styles } from "./HomeScreen.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");

  const goToLogin = () => {
    navigation.replace("Login");
  };

  const goToRegister = () => {
    navigation.replace("Register");
  };
  const goToMain = () => {
    navigation.replace("Main");
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("fullName");
    navigation.replace("Login");
  };

  useEffect(() => {
    AsyncStorage.getItem("fullName").then((name) => {
      if (name) {
        setFullName(name);
      }
    });
  }, []);

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
        {fullName ? (
          <>
            <GradientButton action={goToMain} text="Play" color="flatgreen" />
            <GradientButton
              action={handleLogout}
              text="Logout"
              color="yellow"
            />
          </>
        ) : (
          <>
            <GradientButton action={goToLogin} text="Login" color="yellow" />
            <GradientButton
              action={goToRegister}
              text="Register"
              color="flatgreen"
            />
          </>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
