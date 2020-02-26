 //Description: This file provides the code for the user interface of the calendar page.

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

import FloatingButton from '../components/FloatingButton'
import Calendar from '../components/CalendarStyled';

//Description of the function CalendarScreen:
    //@pre None

    // @post launches the CalendarScreen

    // @param props
const CalendarScreen = (props) => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, selectDate] = useState('');
  const [dataLoading, setDataLoading] = useState(false);

  //Description of the function onMakeEvent
       // @pre None

       //@post this function is called when the "Make Event" button is pressed

       // @param None
  const onMakeEvent = async () => {
    setDataLoading(true);
    const eventData = {
      ...selectedDate,
      title: eventName,
      names: ['Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
      'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
      'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
      'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
      'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
      '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
      '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '', '', '']
    }
    //Description of the function below:
        //@pre None
        // @post this function call makes a new document in the database with the above object as its data
        //@param None
    const docRef = await firebase.firestore().collection('events').doc()
    docRef.set(eventData)
      .then(() => {
        setEventName('');
        selectDate('');
        setDataLoading(false);
        props.navigation.navigate('Event', { eventId: docRef.id, eventData });
      })
      .catch((e) => {
        console.log(e);
        setDataLoading(false);
      });
  }
  console.log(eventName, selectedDate)
  return (
    <>
      {
          dataLoading &&
          <ActivityIndicator
            size="large"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              alignSelf: 'center',
              zIndex: 10,
            }}
          />}
          {(eventName && selectDate) && <FloatingButton
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

// Description of the background of the page


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {},
  floatingButton: {},
  input: {
    height: '10%',
  }
});

export default CalendarScreen;
