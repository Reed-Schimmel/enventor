//Description: This file is to implement the calendar styles.
import React from 'react'
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Colors from '../constants/Colors';

//Reference https://github.com/wix/react-native-calendars
// Reference https://github.com/wix/react-native-calendars/blob/master/src/calendar/day/basic/style.js

//Description of the function on the right:

// @pre None

//@post Description of calendar style

// @param selectedDate, onDayPress
export default ({ selectedDate, onDayPress, searchDates }) => {
  const otherDates = searchDates[0] ? searchDates.reduce((prev = {}, curr) => {
    return {
      ...prev,
      [curr.dateString]: { marked: true, selected: true }
    }
  }) : {};

  // console.log(searchDates, otherDates);
  return (
    <Calendar
      style={styles.calendar}
      hideArrows={false}
      onDayPress={onDayPress}
      markedDates={{
        ...otherDates,
        [selectedDate.dateString]: { selected: true, marked: true, selectedColor: Colors.theme.darkAccent },
      }}
      markingType={'multi-dot'}
      theme={{
        calendarBackground: Colors.theme.lightShades,
        selectedDayBackgroundColor: Colors.theme.lightAccent,
        // indicatorColor: Colors.theme.darkShades,
        // textSectionTitleColor: Colors.theme.darkShades,
        // 'stylesheet.calendar.header': {
        //   week: {
        //     marginTop: 5,
        //     flexDirection: 'row',
        //     justifyContent: 'space-between'
        //   }
        // },
        'stylesheet.calendar.main': {
          week: {
            flexDirection: 'row',
            flexGrow: 1,
            alignContent: 'center',
            textAlign: 'center',
            textAlignVertical: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          monthView: {
            flex: 1,
            alignItems: 'stretch'
          }

        },
        // 'stylesheet.day.basic': {
        // base: {
        // borderWidth: 1,
        // height: 100
        // alignSelf: 'stretch',
        // flex:1,
        // flexGrow: 1,
        // }
        // }

      }}
    />
  )
};

//Descriptions of components used in calendar page
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
})
