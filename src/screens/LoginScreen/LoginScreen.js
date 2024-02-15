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

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import { API_URL } from "../../constant/API";
import { stylesLogin } from "./LoginScreen.styles";
import GradientButton from "../../components/GradientButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkFullName();
  }, []);

  const checkFullName = async () => {
    const fullName = await AsyncStorage.getItem("fullName");
    if (fullName) {
      navigation.replace("Main");
    }
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      await AsyncStorage.setItem("fullName", response.data.fullName);
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("Error", "Invalid email or password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigation.replace("Register");
  };

  return (
    <View style={stylesLogin.container}>
      <View style={stylesLogin.header}>
        <Text>Hello!</Text>
        <Text>Enjoy Rock, Paper, Scissors, Shoot!</Text>
      </View>
      <Image
        source={require("../../../assets/rock-paper-scissors.svg")}
        style={stylesLogin.imageSize}
        resizeMode="contain"
      />
      <View>
        <Text style={stylesLogin.label}>Email:</Text>
        <KeyboardAwareScrollView>
          <TextInput
            style={stylesLogin.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Enter your email"
          />
          <Text style={stylesLogin.label}>Password:</Text>
          <TextInput
            style={stylesLogin.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </KeyboardAwareScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <GradientButton action={handleLogin} text="Login" color="green" />
        )}
        <Text style={stylesLogin.registerText} onPress={goToRegister}>
          Belum punya akun?{" "}
          <Text style={stylesLogin.registerLink}>Buat disini</Text>
        </Text>
      </View>
      <View style={stylesLogin.backgroundBottom} />
    </View>
  );
};

export default LoginScreen;
