import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const stylesMain = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 64,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textKalimat: {
    fontSize: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: windowWidth * 0.9,
    gap: 10,
  },
  resultContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#CBCED1",
    width: windowWidth * 0.8,
    borderRadius: 20,
  },
  playerScore: {
    width: "100%",
    backgroundColor: "#23D18B",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  computerScore: {
    width: "100%",
    backgroundColor: "#E64A19",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  resultCard: {
    gap: 10,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
  },
  resultText: {
    height: 16,
    fontSize: 24,
    marginVertical: 5,
    textAlign: "center",
    fontweight: "bold",
  },
  button: {
    borderRadius: 25,
    overflow: "hidden",
    top: "10%",
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
  resultImage: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
};
