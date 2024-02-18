import React from "react";
import { ScrollView } from "react-native";

import AppSrc from "./src";

const Rendering = () => (
  <ScrollView
    contentContainerStyle={{
      height: "100%",
    }}
  >
    <AppSrc />
  </ScrollView>
);

export default Rendering;
