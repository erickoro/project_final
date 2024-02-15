import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const stylesRegister = {
  background: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: windowWidth,
    borderTopWidth: windowHeight * 0.3,
    borderRightColor: "transparent",
    borderTopColor: "#5AB266",
    position: "absolute",
    top: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "white", // Green Army
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E1E1E", // White
  },
  formContainer: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: "#E8F0FE", // Honeydew
  },
  loginText: {
    marginTop: 20,
    color: "#1E1E1E", // White
  },
  loginLink: {
    color: "#FFCA28", // Lime
    textDecorationLine: "underline",
  },
  button: {
    borderRadius: 25,
    overflow: "hidden",
  },
  gradient: {
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
    marginVertical: "10%",
  },
};
