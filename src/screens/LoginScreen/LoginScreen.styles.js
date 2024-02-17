import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const stylesLogin = {
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
  formContainer: {
    width: "80%",
    alignItems: "stretch",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  label: {
    marginBottom: 5,
    color: "#1E1E1E", // White
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#E8F0FE", // Honeydew
    marginBottom: 10,
  },
  registerText: {
    marginTop: 20,
    color: "#1E1E1E",
    alignSelf: "center",
  },
  registerLink: {
    color: "#00FF00",
    textDecorationLine: "underline",
  },
  button: {
    borderRadius: 25,
    overflow: "hidden",
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
