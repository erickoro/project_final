// Navigation.js
import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

import LoginScreen from "../src/LoginComponent/LoginComponent";
import RegisterScreen from "../src/RegisterComponent/RegisterComponent";
import GameScreen from "../src/MainComponent/MainComponent";
import BottomButton from "../src/TestingComponent/TestingComponent";

const Stack = createStackNavigator();

const Navigation = () => {
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
        {/* <Stack.Screen name="Test" component={BottomButton} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
