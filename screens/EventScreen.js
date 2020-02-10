import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventScreen = (props) => {
  const { eventData } = props; // TODO: data does not yet exist

  return (
    <View style={styles.container}>
      <Text>Hello Amir!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EventScreen;
