import React, { useEffect, useState } from "react";
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

  const choices = [
    { name: "batu", image: require("../../../assets/batu.png") },
    { name: "gunting", image: require("../../../assets/gunting.png") },
    { name: "kertas", image: require("../../../assets/kertas.png") },
  ];

  const handlePlayerChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex].name;

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult("Draw!");
    } else if (
      (choice === "batu" && computerChoice === "gunting") ||
      (choice === "gunting" && computerChoice === "kertas") ||
      (choice === "kertas" && computerChoice === "batu")
    ) {
      setResult("You win!");
      setPlayerScore((prev) => prev + 1);
    } else {
      setResult("You lose!");
      setComputerScore((prev) => prev + 1);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("fullName");

    navigation.replace("Login");
  };

  return (
    <View style={stylesMain.container}>
      <Text style={stylesMain.fullName}>Hallo, {fullName}</Text>
      <Text style={stylesMain.textKalimat}>
        Mari Bermain, Kalahkan lawanmu !!!
      </Text>
      <Text style={stylesMain.title}>Batu Gunting Kertas</Text>
      <View style={stylesMain.choicesContainer}>
        {choices.map((choice) => (
          <ChoiceButton
            key={choice.name}
            image={choice.image}
            action={() => handlePlayerChoice(choice.name)}
          />
        ))}
      </View>
      <View style={stylesMain.resultContainer}>
        {playerChoice && computerChoice && (
          <View>
            <Text style={stylesMain.resultText}>
              Your choice: {playerChoice}
            </Text>
            <Text style={stylesMain.resultText}>
              Computer's choice: {computerChoice}
            </Text>
            <Text style={stylesMain.resultText}>{result}</Text>
            <Text style={stylesMain.resultText}>
              player Score: {playerScore}
            </Text>
            <Text style={stylesMain.resultText}>
              computer Score: {computerScore}
            </Text>
          </View>
        )}
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
  );
};

export default GameScreen;
