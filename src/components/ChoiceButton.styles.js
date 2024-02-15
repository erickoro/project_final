import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const stylesMain = {
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: windowWidth * 0.9,
  },
  choiceCard: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    marginBottom: 10,
  },
  choiceImage: {
    width: "100%",
    height: "100%",
  },
};
