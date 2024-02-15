import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 32,
    gap: 20,
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  title: {
    fontWeight: "bold",
    fontSize: 32,
  },
  subtitle: {
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: "20%",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    paddingVertical: "12",
    backgroundColor: "#5AB267",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  backgroundBottom: {
    height: "40%",
    width: "100%",
    background: "#5AB266",
    position: "absolute",
    // transform: [{ rotate: "-24deg" }],
    borderRadius: 10,
    bottom: -10,
    zIndex: -1,
  },
};
