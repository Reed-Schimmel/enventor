import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({ onPress, title, style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.floatingButton, style]}
  >
    <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    height: 100,
    width: 100,
    borderRadius: 50,
    zIndex: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  }
});