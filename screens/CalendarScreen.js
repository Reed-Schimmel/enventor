import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarScreen = (props) => {
  const { eventData } = props; // TODO: data does not yet exist

  return (
    <View style={styles.container}>
      <Text>Reed's awesome calendar stuff here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CalendarScreen;
