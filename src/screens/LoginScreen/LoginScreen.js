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

import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import { API_URL } from "../../constant/API";
import { stylesLogin } from "./LoginScreen.styles";
import GradientButton from "../../components/GradientButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
      console.log(response);
      await AsyncStorage.setItem("fullName", response.data.fullName);
      navigation.replace("Main");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Alert.alert("Invalid Email or Password");
      } else {
        Alert.alert("Error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const goToRegister = () => {
    navigation.replace("Register");
  };

  return (
    <View style={stylesLogin.container}>
      <View style={stylesLogin.background} />
      <Image
        source={require("../../../assets/rock-paper-scissors.png")}
        style={stylesLogin.imageSize}
        resizeMode="contain"
      />
      <Text style={stylesLogin.title}>Welcome Back!</Text>
      <View style={stylesLogin.formContainer}>
        <KeyboardAwareScrollView>
          <Text style={stylesLogin.label}>Email:</Text>
          <TextInput
            style={stylesLogin.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Enter your email"
          />
        </KeyboardAwareScrollView>
        <KeyboardAwareScrollView>
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
          <GradientButton action={handleLogin} text="Login" color="yellow" />
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
