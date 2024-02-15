import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { useNavigation } from "@react-navigation/native"; 

import { API_URL } from "../../constant/API";
import { styles } from "./HomeScreen.styles";
import GradientButton from "../../components/GradientButton";

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
          source={require("../../../assets/rock-paper-scissors.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>Enjoy Rock, Paper, Scissors, Shoot!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton action={goToLogin} text="Login" color="yellow" />
        <GradientButton action={goToLogin} text="Register" color="green" />
      </View>
    </View>
  );
};

export default HomeScreen;
