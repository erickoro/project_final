import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const stylesMain = {
  choiceButton: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },
  choiceImage: {
    width: "100%",
    height: "100%",

    alignSelf: "center",
  },
};
