import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomButton = ({ onPress, buttonText }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomButton;