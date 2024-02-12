import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, Alert, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import Axios from "axios";
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from "react-native-paper";

import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import { stylesRegister } from "./RegisterComponent.styles";
import { API_URL } from "../../Constants/API";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Initialize useNavigation hook

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
      {/* <Card style={stylesRegister.imageCard}>
        <Card.Cover source={require("../../assets/rock-paper-scissors.png")} style={stylesRegister.imageSize} />
      </Card> */}
      <Image source={require("../../assets/rock-paper-scissors.png")} style={stylesRegister.imageSize} resizeMode="contain" />
      <Text style={stylesRegister.title}>Daftar Akun</Text>
      <View style={stylesRegister.formContainer}>
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
        {/* <Button
          title={loading ? "Loading..." : "Daftar"}
          onPress={handleSubmit}
          disabled={loading}
        /> */}
        {loading ? (
          // <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          // <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={handleSubmit} style={stylesRegister.button}>
            <LinearGradient
              colors={['#4CAF50', '#2E7D32']} // Warna gradient sesuaikan dengan tema hijau army yang diinginkan
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={stylesRegister.gradient}
            >
              <Text style={stylesRegister.buttonText}>Daftar</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
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
