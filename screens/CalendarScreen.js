import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

import FloatingButton from '../components/FloatingButton'
import Calendar from '../components/CalendarStyled';

const CalendarScreen = (props) => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, selectDate] = useState('');
  const [dataLoading, setDataLoading] = useState(false);

  // this function is called when the "Make Event" button is pressed
  const onMakeEvent = () => {
    setDataLoading(true);
    const eventData = {
      ...selectedDate,
      title: eventName,
      people: [],
    }
    // this function call makes a new document in the database w/ the above object as its data
    firebase.firestore().collection('events').doc().set(eventData)
      .then(() => {
        setEventName('');
        selectDate('');
        setDataLoading(false);
        props.navigation.navigate('Event', { eventData });
      })
      .catch((e) => {
        console.log(e);
        setDataLoading(false);
      });
  }

  return (
    <>
      {
        (eventName && selectDate)
          && dataLoading
          ? <ActivityIndicator
            size="large"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              alignSelf: 'center',
            }}
          />
          : <FloatingButton
            title="Make Event"
            onPress={onMakeEvent}
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
