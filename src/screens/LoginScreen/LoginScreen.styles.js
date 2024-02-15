import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const stylesLogin = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Green Army
    paddingVertical: 20,
  },
  header: {
    flex: 1,
    alignItems: "center",
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
  label: {
    marginBottom: 5,
    color: "#1E1E1E",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#F0FFF0", // Honeydew
    color: "#000000", // Black
    borderRadius: 5,
  },
  registerText: {
    marginTop: 20,
    color: "#1E1E1E", // White
  },
  registerLink: {
    color: "#00FF00", // Lime
    textDecorationLine: "underline",
  },
  button: {
    borderRadius: 25,
    overflow: "hidden", // Untuk memastikan gradient tetap di dalam batas border radius
    // marginTop: 20,
    // top: '25%',
  },
  gradient: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  imageSize: {
    width: 200,
    height: 200,
    marginBottom: "20%",
  },
};
