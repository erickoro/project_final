import React from "react";
import { ScrollView } from "react-native";
import Navigation from "./src/Navigation/Navigation";

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
