import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Register from "./src/RegisterComponent/RegisterComponent";
import Login from "./src/LoginComponent/LoginComponent";
import { SafeAreaView, ScrollView } from "react-native";
import Navigation from "./Navigation/Navigation";

const Rendering = () => (
  // <SafeAreaView  forceInset={{ top: 'always' }}>
  <ScrollView
    contentContainerStyle={{
      height: "100%",
    }}
  >
    <Navigation />
  </ScrollView>
  // </SafeAreaView>
);

export default Rendering;
