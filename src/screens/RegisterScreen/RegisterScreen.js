import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import Axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { stylesRegister } from "./RegisterScreen.styles";
import { API_URL } from "../../constant/API";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const { password, confirmPassword } = formData;

      if (password !== confirmPassword) {
        return Alert.alert("Coba lagi", "Password not matched !");
      }
      setLoading(true);

      const response = await Axios.post(`${API_URL}/register`, formData);

      setLoading(false);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log(response);
      Alert.alert("Berhasil", "Register Berhasil !");
      return navigation.replace("Login");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={stylesRegister.container}>
      <View style={stylesRegister.background} />
      <Image
        source={require("../../../assets/rock-paper-scissors.svg")}
        style={stylesRegister.imageSize}
        resizeMode="contain"
      />
      <Text style={stylesRegister.title}>Daftar Akun</Text>
      <KeyboardAwareScrollView style={stylesRegister.formContainer}>
        <TextInput
          style={stylesRegister.input}
          placeholder="Nama Lengkap"
          value={formData.fullName}
          onChangeText={(text) => handleChange("fullName", text)}
        />
        <TextInput
          style={stylesRegister.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          style={stylesRegister.input}
          placeholder="Password"
          secureTextEntry={true}
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
        />
        <TextInput
          style={stylesRegister.input}
          placeholder="Konfirmasi Password"
          secureTextEntry={true}
          value={formData.confirmPassword}
          onChangeText={(text) => handleChange("confirmPassword", text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity
            onPress={handleSubmit}
            style={stylesRegister.button}
          >
            <LinearGradient
              colors={["#4CAF50", "#2E7D32"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={stylesRegister.gradient}
            >
              <Text style={stylesRegister.buttonText}>Daftar</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </KeyboardAwareScrollView>
      <Text
        style={stylesRegister.loginText}
        onPress={() => navigation.replace("Login")}
      >
        Sudah punya akun?{" "}
        <Text style={stylesRegister.loginLink}>Masuk disini</Text>
      </Text>
    </ScrollView>
  );
};

export default RegisterScreen;
