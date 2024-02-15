// Navigation.js
import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import LoginScreen from "../screens/LoginScreen/LoginScreen";

import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";

import GameScreen from "../screens/GameScreen/GameScreen";

const Stack = createStackNavigator();

const AppSrc = () => {
  const fullName = AsyncStorage.getItem("fullName");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={fullName ? "Login" : "Main"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Main"
          component={GameScreen}
          options={{ unmountOnBlur: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppSrc;
