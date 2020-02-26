//Description: This file is used for the launching of the event page.

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Col } from 'react-native-table-component';
import EventSlot from '../components/EventSlot'
import FloatingButton from '../components/FloatingButton'
import firebase from 'firebase';
import Colors from '../constants/Colors';

export default class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.eventData = props.navigation.getParam('eventData') //get the data from the calandar screen
    this.eventId = props.navigation.getParam('eventId');
    this.state = {

      timeState: true, //if true the table is displayed in 12 hour mode, displayed in 24 hour mode if false

      times: [['12:00am'], ['12:20am'], ['12:40am'], //array for 12 hour times
      ['1:00am'], ['1:20am'], ['1:40am'],
      ['2:00am'], ['2:20am'], ['2:40am'],
      ['3:00am'], ['3:20am'], ['3:40am'],
      ['4:00am'], ['4:20am'], ['4:40am'],
      ['5:00am'], ['5:20am'], ['5:40am'],
      ['6:00am'], ['6:20am'], ['6:40am'],
      ['7:00am'], ['7:20am'], ['7:40am'],
      ['8:00am'], ['8:20am'], ['8:40am'],
      ['9:00am'], ['9:20am'], ['9:40am'],
      ['10:00am'], ['10:20am'], ['10:40am'],
      ['11:00am'], ['11:20am'], ['11:40am'],
      ['12:00pm'], ['12:20pm'], ['12:40pm'],
      ['1:00pm'], ['1:20pm'], ['1:40pm'],
      ['2:00pm'], ['2:20pm'], ['2:40pm'],
      ['3:00pm'], ['3:20pm'], ['3:40pm'],
      ['4:00pm'], ['4:20pm'], ['4:40pm'],
      ['5:00pm'], ['5:20pm'], ['5:40pm'],
      ['6:00pm'], ['6:20pm'], ['6:40pm'],
      ['7:00pm'], ['7:20pm'], ['7:40pm'],
      ['8:00pm'], ['8:20pm'], ['8:40pm'],
      ['9:00pm'], ['9:20pm'], ['9:40pm'],
      ['10:00pm'], ['10:20pm'], ['10:40pm'],
      ['11:00pm'], ['11:20pm'], ['11:40pm']],

      times2: [['00:00'], ['00:20'], ['00:40'],  //array for 24 hour times
      ['01:00'], ['01:20'], ['01:40'],
      ['02:00'], ['02:20'], ['02:40'],
      ['03:00'], ['03:20'], ['03:40'],
      ['04:00'], ['04:20'], ['04:40'],
      ['05:00'], ['05:20'], ['05:40'],
      ['06:00'], ['06:20'], ['06:40'],
      ['07:00'], ['07:20'], ['07:40'],
      ['08:00'], ['08:20'], ['08:40'],
      ['09:00'], ['09:20'], ['09:40'],
      ['10:00'], ['10:20'], ['10:40'],
      ['11:00'], ['11:20'], ['11:40'],
      ['12:00'], ['12:20'], ['12:40'],
      ['13:00'], ['13:20'], ['13:40'],
      ['14:00'], ['14:20'], ['14:40'],
      ['15:00'], ['15:20'], ['15:40'],
      ['16:00'], ['16:20'], ['16:40'],
      ['17:00'], ['17:20'], ['17:40'],
      ['18:00'], ['18:20'], ['18:40'],
      ['19:00'], ['19:20'], ['19:40'],
      ['20:00'], ['20:20'], ['20:40'],
      ['21:00'], ['21:20'], ['21:40'],
      ['22:00'], ['22:20'], ['22:40'],
      ['23:00'], ['23:20'], ['23:40']],

      names: this.eventData.names || ['Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
        'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
        'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
        'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
        'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', ''], //this.eventdata.availability

      invalidTimes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 36, 37, 38], //array with the indicies of the invalid time slots. This is used to track which indecies cause an alert to display

      busyTimes: [], //an array that pushes the value of the clicked slots index to track which indices to add a name to

      clickedSlots: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //tracks the rows clicked to change background to white
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  // this lets us navigate back to home from this screen
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        color: 'white',
      },
      headerStyle: {
        backgroundColor: Colors.theme.main,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{ marginLeft: 15, color: 'white' }}>Create Event</Text>
        </TouchableOpacity>
      )
    };
  }

  submitTimeSlots = async () => {
    return firebase.firestore().collection('events').doc(this.eventId)
      .update({ names: this.state.names });
  }

  // this is called after the screen renders for the first time
  // it updates the page data with data from the database
  async componentDidMount() {
    firebase.firestore().collection('events').doc(this.eventId).get()
      .then((docSnapshot) => {
        const eventData = docSnapshot.data();
        this.eventData = eventData;
        console.log(this.props.navigation)
        this.props.navigation.setParams({ title: `${eventData.title}` })
        this.setState({ ...this.state, names: eventData.names });
      })
      .catch((e) => console.log(e));
  }


  //Description of the function changeTime:

  // @pre 12/24 hr button is clicked

  // @post  changes the value of the displayed times array

  changeTime = () => {
    let timesTemp = this.state.times //call to 12 hr times array (times)
    let timesTemp2 = this.state.times2 //call to 24 hr times array (times2)
    let timeStateTemp = this.state.timeState //call to timeState boolean 
    let temp = [] //used to hold values of times so that times can be set to times2 and vice versa

    for (let i = 0; i < timesTemp.length; i++) {
      if (timeStateTemp = true) //check whether to display 12hr array or 24 hr array 
      {
        temp.push(timesTemp[i])
        timesTemp[i] = timesTemp2[i]
        timesTemp2[i] = temp[i]
      }
      else if (temp3 = false) {
        temp.push(timesTemp2[i])
        timesTemp[i] = timesTemp2[i]
        timesTemp[i] = temp[i]
      }
    }
    timeStateTemp = !timeStateTemp //change value of timeState boolean and update the state of the arrays
    this.setState({ times: timesTemp, times2: timesTemp2, timeState: timeStateTemp })
  }


  /**
   * @pre a time slot is selected 
   * @post the state of the busyTimes and trackClicks arrays are updated with the values of the time slot clicked
   * @param {the index of the clicked on time slot} index
  */
  trackClicks = (index) => {
    let busyTemp = this.state.busyTimes // busyTimes tracks the indices that a user has clicked on
    let invalidTimesTemp = this.state.invalidTimes
    let clickedSlotsTemp = this.state.clickedSlots

    for (let i = 0; i < invalidTimesTemp.length; i++) //if the index is in the invalidTimes array display an alert
    {
      if (index == invalidTimesTemp[i]) {
        alert("This is an invalid time slot. Please select a different one.")
        return
      }
    }
    if (busyTemp.length == 0) {
      busyTemp.push(index) //if busyTimes is empty push the index clicked into the array
      clickedSlotsTemp[index] = busyTemp[0] //add index value to index position in trackClicks array to be able to change background color 
    }

    else {
      for (let j = 0; j < busyTemp.length; j++) {
        if (busyTemp[j] == index)
          return
      }
      busyTemp.push(index) //if busyTimes not empty check to see if index already in busyTimes. Push index if no, ignore if yes 
      clickedSlotsTemp[index] = busyTemp[busyTemp.length - 1] //add index value to index position in trackClicks array to be able to change background color 
    }
    this.setState({ busyTimes: busyTemp, clickedSlots: clickedSlotsTemp })
  }


  //Description of the function submitName:

  // @pre at least on time slot is selected, an alert is called otherwise

  // @post adds the name given to each of the clicked on time slots
  submitName = async () => {
    let busyTemp = this.state.busyTimes
    let namesTemp = this.state.names
    let clickedSlotsTemp = this.state.clickedSlots
    if (busyTemp.length === 0) { // TODO: fix double prompt
      alert("Please select a time slot to submit your name")//display alert if submit is clicked with no time slot selected 
      return
    }

    //take in users name
    let name = prompt("Please enter your name") // TODO: fix double prompt
    if (name != null && name.length > 0) {
      for (let i = 0; i < busyTemp.length; i++) {
        namesTemp[busyTemp[i]] === ''
          ? namesTemp[busyTemp[i]] = name
          : namesTemp[busyTemp[i]] += `, ${name}`; //loop through busy times to find which index values to add names to 
      }
    }
    for (let i = 0; i < clickedSlotsTemp.length; i++) {
      clickedSlotsTemp[i] = 0 //rest the values of trackClicks array so that background color doesn't stay white after name added
    }
    busyTemp = [] //empty busyTimes array so that those time slots can be clicked on again 
    await this.submitTimeSlots();
    this.setState({ busyTimes: busyTemp, names: namesTemp, clickedSlots: clickedSlotsTemp })
  }

  render() {
    const state = this.state
    const items = state.times.map((times, index) => ( //use map() to display a slot for each value in times array into one variable (items)
      <TouchableOpacity
        style={[
          styles.text, state.names[index] != '' ? styles.addedName : styles.emptySlots, //if names at index isn't empty make background green, pink otherwise
          state.clickedSlots[index] == index && index != 0 ? styles.selectedSlot : null //if a slot is clicked, make background white
        ]}
        key={index} onClick={() => this.trackClicks(index)} >
        <EventSlot time={state.times[index]} names={state.names[index]}></EventSlot>
      </TouchableOpacity>
    )
    );

    return (

      <> {/* use angle brackets around JSX so that the submit button will stay on screen while scrolling */}
        <FloatingButton
          title="Submit"
          onPress={() => this.submitName()}
          style={styles.submitButton}
        />
        <FloatingButton
          title="Toggle 12/24 Hour"
          onPress={() => this.changeTime()}
          style={{ right: undefined, left: 30 }}
        />
        <ScrollView style={styles.ScrollView}>
          <Col
            data={items} //display the time slots in a column format 
          />
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: { //style for event name header
    borderWidth: 1,
    height: 50,
    backgroundColor: Colors.theme.darkAccent,
  },

  eventTitle: {
    textAlign: "center",
    fontSize: 25,
  },

  addedName: { //styles for time slots with added names 
    backgroundColor: 'azure',
  },
  emptySlots: { //style for empty time slots
    backgroundColor: Colors.theme.darkAccent,

  },
  selectedSlot: { //style for selected time slots 
    backgroundColor: "beige"
  },

  submitButton: {},
  text: {},

  timeButton: { //style for 12-24 hour button 
    left: 30,
    height: 45,
    width: 75,
  }

});