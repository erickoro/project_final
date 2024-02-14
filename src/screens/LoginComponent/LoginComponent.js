import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import axios from "axios";
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import { API_URL } from "../../Constants/API";
import { stylesLogin } from "./LoginComponent.styles";
import { mockLoginData } from "../../Fixtures/mockData";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigation = useNavigation(); // Initialize useNavigation hook

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
    setLoading(true); // Set loading to true when login starts

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      // kalo mau pake mock
      // const { passwordMock, emailMock, fullName } = mockLoginData;

      // if (passwordMock !== password && emailMock !== email) {
      //   return Alert.alert("Error", "Invalid email or password");
      // }

      // Save user's fullName to AsyncStorage
      await AsyncStorage.setItem("fullName", response.data.fullName);
      
      // kalo mau pake mock
      // await AsyncStorage.setItem("fullName", fullName);

      // Navigate to the Main screen upon successful login
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("Error", "Invalid email or password");
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after login attempt (whether success or failure)
    }
  };

  const goToRegister = () => {
    navigation.replace("Register");
  };

  return (
    <View style={stylesLogin.container}>
      {/* <Card style={stylesLogin.imageCard}>
        <Card.Cover source={require("../../assets/rock-paper-scissors.png")} style={stylesLogin.imageSize} />
      </Card> */}
      <Image source={require("../../assets/rock-paper-scissors.png")} style={stylesLogin.imageSize} resizeMode="contain" />
      <Text style={stylesLogin.label}>Email:</Text>
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
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        // <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={handleLogin} style={stylesLogin.button}>
          <LinearGradient
            colors={['#4CAF50', '#2E7D32']} // Warna gradient sesuaikan dengan tema hijau army yang diinginkan
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={stylesLogin.gradient}
          >
            <Text style={stylesLogin.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
      <Text style={stylesLogin.registerText} onPress={goToRegister}>
        Belum punya akun?{" "}
        <Text style={stylesLogin.registerLink}>Buat disini</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
