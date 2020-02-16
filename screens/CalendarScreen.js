import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import FloatingButton from '../components/FloatingButton'
import Calendar from '../components/CalendarStyled';

const CalendarScreen = (props) => {
  const { eventData } = props; // TODO: data does not yet exist

  const [eventName, setEventName] = useState('');
  const [selectedDate, selectDate] = useState('');

  return (
    <>
      {
        (eventName && selectDate)
        && <FloatingButton
          title="Make Event"
          onPress={() => console.log({ eventName, selectedDate })}
          style={styles.floatingButton}
        />
      }
      <View style={styles.container}>
        <TextInput
          value={eventName}
          onChangeText={text => setEventName(text)}
          style={styles.input}
        />
        <Calendar
          onDayPress={date => {
            console.log(date);
            selectDate(date);
          }}
          selectedDate={selectedDate}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 10,
    // borderColor: 'red',
  },
  calendar: {
    flex: 1,
    alignSelf: 'stretch',
    alignContent: 'space-between',
    justifyContent: 'stretch',
    flexShrink: 0,
    flexGrow: 1,
    alignItems: 'stretch',
    // height: '80%',
    // borderWidth: 10,
  },
  floatingButton: {},
  input: {
    height: '10%',
  }
});

export default CalendarScreen;
