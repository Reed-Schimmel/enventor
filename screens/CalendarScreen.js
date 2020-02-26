//Description: This file provides the code for the user interface of the calendar page.

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { debounce } from 'lodash';

import FloatingButton from '../components/FloatingButton'
import Calendar from '../components/CalendarStyled';


/**
 * @description createSearchIndex
 * @param text
 */
const createSearchIndex = (text) => text.toUpperCase().split('').sort().join('');

/**
 * @description event search function
 * @param {searchTerm} props 
 * https://lodash.com/docs/4.17.15#debounce
 */
const searchEvents = debounce((text, callback) => {
  const searchTerm = createSearchIndex(text);
  console.log(searchTerm)
  return firebase.firestore().collection('events')//.orderBy('searchTitle')
    .where('searchTitle', '>=', searchTerm).where('searchTitle', '<=', searchTerm + '\uf8ff') // search for substring
    .get()
    .then((querySnapshot) => {
      const events = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        events.push(doc.data());
      });
      callback(events);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      return [];
    });
}, 500);


/** Description of the function CalendarScreen:
@pre None
@post launches the CalendarScreen
@param props 
*/
const CalendarScreen = (props) => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, selectDate] = useState('');
  const [searchDates, setSearchDates] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const inputTextChange = (text) => {
    text ? searchEvents(text, setSearchDates) : setSearchDates([]);
    setEventName(text);
  }

  //Description of the function onMakeEvent
  // @pre None

  //@post this function is called when the "Make Event" button is pressed

  // @param None
  const onMakeEvent = async () => {
    setDataLoading(true);
    const eventData = {
      ...selectedDate,
      title: eventName,
      searchTitle: createSearchIndex(eventName), // creates searchable index from title
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
  // console.log({eventName}, {selectedDate})
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
      {(eventName && selectedDate) && <FloatingButton
        title="Make Event"
        onPress={onMakeEvent}
        style={styles.floatingButton}
      />
      }
      <View style={styles.container}>
        <TextInput
          value={eventName}
          onChangeText={inputTextChange}
          style={styles.input}
        />
        <Calendar
          onDayPress={date => {
            console.log(date);
            selectDate(date);
          }}
          selectedDate={selectedDate}
          searchDates={searchDates}
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
    fontSize: 32,
  }
});

export default CalendarScreen;
