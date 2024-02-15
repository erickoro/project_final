import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "react-native-paper";
import { stylesMain } from "./GameScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import ChoiceButton from "../../components/ChoiceButton";

const GameScreen = ({ navigation }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerImage, setPlayerImage] = useState(
    require("../../../assets/question-mark.svg")
  );
  const [computerImage, setComputerImage] = useState(
    require("../../../assets/question-mark.svg")
  );
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("fullName").then((name) => {
      if (name) {
        setFullName(name);
      }
    });
  }, []);

  useEffect(() => {
    if (computerChoice && playerChoice) getResult();
  }, [computerChoice, playerChoice]);

  const choices = [
    { name: "batu", image: require("../../../assets/batu.svg") },
    { name: "gunting", image: require("../../../assets/gunting.svg") },
    { name: "kertas", image: require("../../../assets/kertas.svg") },
  ];

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex].name);
    setComputerImage(choices[randomIndex].image);
  };

  const handlePlayerChoice = (choice, image) => {
    getComputerChoice();
    setPlayerChoice(choice);
    setPlayerImage(image);
  };

  const getResult = () => {
    console.log(playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
      setResult("Draw!");
    } else if (
      (playerChoice === "batu" && computerChoice === "gunting") ||
      (playerChoice === "gunting" && computerChoice === "kertas") ||
      (playerChoice === "kertas" && computerChoice === "batu")
    ) {
      setResult("You win!");
      setPlayerScore((prev) => prev + 1);
    } else {
      setResult("You lose!");
      setComputerScore((prev) => prev + 1);
    }
    console.log(result, playerScore, computerScore);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("fullName");
    navigation.replace("Login");
  };

  return (
    <View style={stylesMain.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={stylesMain.fullName}>Halo, {fullName}</Text>
        <Text style={stylesMain.textKalimat}>
          Mari Bermain, Kalahkan lawanmu !!!
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={stylesMain.resultContainer}>
          <View style={stylesMain.resultCard}>
            <Text style={stylesMain.playerScore}>{playerScore}</Text>
            <Image source={playerImage} style={stylesMain.resultImage} />
            <Text>You</Text>
          </View>
          <View style={stylesMain.resultCard}>
            <Text style={stylesMain.computerScore}>{computerScore}</Text>
            <Image source={computerImage} style={stylesMain.resultImage} />
            <Text>Computer</Text>
          </View>
        </View>
        <Text style={stylesMain.resultText}>{result}</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={stylesMain.title}>Choose your choice!</Text>
        <View style={stylesMain.choicesContainer}>
          {choices.map((choice) => (
            <ChoiceButton
              key={choice.name}
              image={choice.image}
              action={() => handlePlayerChoice(choice.name, choice.image)}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleLogout} style={stylesMain.button}>
          <LinearGradient
            colors={["#4CAF50", "#2E7D32"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={stylesMain.gradient}
          >
            <Text style={stylesMain.buttonText}>Logout</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameScreen;
