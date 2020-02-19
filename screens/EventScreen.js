import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { Table, Row, Rows, Col, Cols, TableWrapper } from 'react-native-table-component';
import EventSlot from '../components/EventSlot'

export default class EventScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
       tableTitle: [['12:00am'],['12:20am'],['12:40am'],
                      ['1:00am'],['1:20am'],['1:40am'],
                      ['2:00am'],['2:20am'],['2:40am'],
                      ['3:00am'],['3:20am'],['3:40am'],
                      ['4:00am'],['4:20am'],['4:40am'],
                      ['5:00am'], ['5:20am'],['5:40am'],
                      ['6:00am'],['6:20am'],['6:40am'],
                      ['7:00am'],['7:20am'],['7:40am'],
                      ['8:00am'],['8:20am'],['8:40am'],
                      ['9:00am'],['9:20am'],['9:40am'],
                      ['10:00am'],['10:20am'],['10:40am'],
                      ['11:00am'],['11:20am'],['11:40am'], 
                      ['12:00pm'],['12:20pm'],['12:40pm'],
                      ['1:00pm'],['1:20pm'],['1:40pm'],
                      ['2:00pm'],['2:20pm'],['2:40pm'],
                      ['3:00pm'],['3:20pm'],['3:40pm'],
                      ['4:00pm'],['4:20pm'],['4:40pm'],
                      ['5:00pm'],['5:20pm'],['5:40pm'],
                      ['6:00pm'],['6:20pm'],['6:40pm'],
                      ['7:00pm'],['7:20pm'],['7:40pm'],
                      ['8:00pm'],['8:20pm'],['8:40pm'],
                      ['9:00pm'],['9:20pm'],['9:40pm'],
                      ['10:00pm'],['10:20pm'],['10:40pm'],
                      ['11:00pm'],['11:20pm'],['11:40pm']],

        tableNames2: ['Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot','Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot',
                      'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', , , ,, , , , , ,
                      , , , , , , , , , , , ,
                      'Invalid Time Slot', 'Invalid Time Slot', 'Invalid Time Slot', , , , , , , , , ,
                      , , , , , , , , , , , ,
                      , , , , , , , , , , , ],

        invalidTimes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 36, 37, 38],
        busyTimes: []
        

    }
  }
  _alert(index) { 
    let temp = this.state.tableTitle
    let temp2 = this.state.tableNames2
    let temp3 = this.state.busyTimes
    let temp4 = this.state.invalidTimes

    for(let i = 0; i < temp4.length; i++)
    {
      if(index==temp4[i])
      {
        alert("This is an invalid time slot, please select another")
        return
      }
    }
    for(let i = 0; i < temp3.length; i++)
    {
      if(index==temp3[i])
      {
        let x = prompt("Enter a name")
        if(x != null && x.length>0)
        {
          temp2[index] = temp2[index] + ', ' + x
          this.setState({tableTitle: temp})
          this.setState({tableNames2: temp2})
       // this.setState({busyTimes: temp2})
        }

        return

      }
    }
    let x = prompt("Enter a name")
    if(x != null && x.length>0)
    {
      temp2[index] = x
      temp3.push(index)
      this.setState({tableTitle: temp})
      this.setState({tableNames2: temp2})
      this.setState({busyTimes: temp3})
    }

  }
    
    render () {

      const state = this.state
      const items = state.tableTitle.map((tableTitle, index)=> (
        
      <TouchableOpacity style ={[styles.text, state.tableNames2[index] == null ? styles.text3 : styles.text2,
        state.tableNames2[index]=="Invalid Time Slot" ? styles.text: null]} key = {index} onClick = {() => this._alert(index)} >
       <EventSlot time = {state.tableTitle[index]} names = {state.tableNames2[index]}></EventSlot>
      </TouchableOpacity>
       )
    );


  return(
       <ScrollView style = {styles.ScrollView}>
        <Row style = {styles.container} textStyle = {styles.text3} data = {["Times", "Availability"]}/>
        <Col data = {items}/>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "yellow",
  },

  text: {
   backgroundColor: 'grey',
   borderWidth: 1,
   height: 50
  },

  text2: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    height: 50
  },
  text3: {
    backgroundColor: 'red',

  }

});

