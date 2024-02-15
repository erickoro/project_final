import React from "react";
import { ScrollView } from "react-native";

import AppSrc from "./src";

const Rendering = () => (
  // <SafeAreaView  forceInset={{ top: 'always' }}>
  <ScrollView
    contentContainerStyle={{
      height: "100%",
    }}
  >
    <AppSrc />
  </ScrollView>
  // </SafeAreaView>
);

export default Rendering;
