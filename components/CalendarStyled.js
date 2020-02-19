import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

// https://github.com/wix/react-native-calendars
// https://github.com/wix/react-native-calendars/blob/master/src/calendar/day/basic/style.js

export default ({ selectedDate, onDayPress }) => (
  <Calendar
    style={styles.calendar}
    hideArrows={false}
    onDayPress={onDayPress}
    markedDates={{ [selectedDate.dateString]: { selected: true, marked: true, selectedColor: '#ADD8E6' } }}
    theme={{
      // 'stylesheet.calendar.header': {
      //   week: {
      //     marginTop: 5,
      //     flexDirection: 'row',
      //     justifyContent: 'space-between'
      //   }
      // },
      'stylesheet.calendar.main': {
        week: {
          // marginTop: 5,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          // borderWidth: 5,
          flexGrow: 1,
          // alignSelf: 'stretch',
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
      //   base: {
      //     borderWidth: 1,
      //     // height: 100
      //     alignSelf: 'stretch',
      //     flex:1,
      //     flexGrow: 1,
      //   }
      // }

    }}
  />
);

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