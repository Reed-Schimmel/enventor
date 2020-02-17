// import React, {Component} from 'react';
// import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// import EventSlot from '../components/EventSlot'
// const EventScreen = (props) => {
//   const { eventData } = props; // TODO: data does not yet exist
  
  

    

//    const createTable = () => {
//     let table = []
//     let theTimes = "12:00am"
//     let name = ["amir"]
//     let n = ''
//     let counter2 = 0;
    
//     // Outer loop to create parent
//     for (let i = 0; i < 71; i++) {
//       let children = []
//       //Inner loop to create children
//       for (let j = 0; j < 1; j++) {
    
//           children.push({name})
//           //children.push(<td>{'name'+i}</td>)
//           //console.log(children)
      
//       }

//         if(theTimes == "12:00am")
//         table.push(<EventSlot key = {theTimes} names = {name} time = {theTimes} />)

//         if(theTimes.length == 7)
//         {
          
//           if(counter2 == 12)
//           theTimes = theTimes.replace(theTimes.charAt(5)+theTimes.charAt(6), "pm")

//           if(theTimes.charAt(3) =='0')
//             {
//               n = theTimes.replace("00", "20")
//               theTimes = n
//             }

//             else if(theTimes.charAt(3) =='2')
//             {
//               n = theTimes.replace("20", "40")
//               theTimes = n
//               if(counter2<12)
//                 counter2 ++;
//               else
//                 counter2 = 1
//             }

//             else if(theTimes.charAt(3) =='4')
//             {
//               n = theTimes.replace("40", "00")
//               theTimes = n.replace(n.charAt(0)+n.charAt(1), counter2)
//             }
//         }
//         else if(theTimes.length == 6)
//         {
//           if(theTimes.charAt(2) =='0')
//             {
//               n = theTimes.replace("00", "20")
//               theTimes = n
//             }

//             else if(theTimes.charAt(2) =='2')
//             {
//               n = theTimes.replace("20", "40")
//               theTimes = n
//               counter2++
//             }

//             else if(theTimes.charAt(2) =='4')
//             {
//               n = theTimes.replace("40", "00")
//             // let x = charAt(0)
//             theTimes = n.replace(n.charAt(0), counter2)
              
//             }
//         }
//       //Create the parent and add the children
      
//       table.push(<EventSlot key = {theTimes} names = {name} time = {theTimes} />)

      
//     }
//     return table
//   }

// // const looper = () => {
// //   let name = "amir"
// //   let x = []
// //   let tim = 0
// //   for (let i = 0; i < 6; i++)
// //   {
// //     let y = []
// //     for ( let j = 0; j<3; j++)
// //     {
// //       //y.push(tim)
// //       y.push(name+i) 
      
// //     }
// //     x.push(<EventSlot key = {tim} names = {y} time = {tim} />)
// //     tim++

// //   }
// //   return x
// // }

//   const handleClick=()=> {
//     console.log('The link was clicked.');
//   }
  
//   return(
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}> 
//         <View>{createTable()}</View> 
//       </ScrollView>
//      </SafeAreaView>
//    )
// }



// //<a href="#" onClick ={handleClick}> click this</a>
//     //   <table> 
//     //     {this.createTable()}
//     //   </table>
//     //`${}`
//     // <EventSlot  
//     //       names = {["HI", "Bye"]} time = {"12:00"} >
//     //     </EventSlot>
//     //     <EventSlot
//     //       names = {["Amir"]} time = {"12:20"} />
  
// EventScreen.navigationOptions = {
//   title: null,
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: "white",

//   },
//   times: {
    

    

//   },
// });

// export default EventScreen;





// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
// import { Table, Row, Rows, Col, Cols, Cell, TableWrapper } from 'react-native-table-component';
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
// import EventSlot from '../components/EventSlot'


// const EventScreen = (props) => {
//   const { eventData } = props; // TODO: data does not yet exist

//   let tableHead = ["Times", "Availability"]

//   let blockedTimes1 = [['12:00am'],['12:20am'],['12:40am'],
//                       ['1:00am'],['1:20am'],['1:40am'],
//                       ['2:00am'],['2:20am'],['2:40am'],
//                       ['3:00am'],['3:20am'],['3:40am'],
//                       ['4:00am'],['4:20am'],['4:40am']]

//   let blockedNames1 = [['Invalid Time Slot'],['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot']]

//   let blockedNames2 = [['Invalid Time Slot'],['Invalid Time Slot'], 
//                       ['Invalid Time Slot']]

//   let blockedTimes2 = [['12:00pm'],['12:20pm'],['12:40pm']]    

//   let morningTimes = [['5:00am'], ['5:20am'],['5:40am'],
//                       ['6:00am'],['6:20am'],['6:40am'],
//                       ['7:00am'],['7:20am'],['7:40am'],
//                       ['8:00am'],['8:20am'],['8:40am'],
//                       ['9:00am'],['9:20am'],['9:40am'],
//                       ['10:00am'],['10:20am'],['10:40am'],
//                       ['11:00am'],['11:20am'],['11:40am']]

//   let afternoonTimes = [['1:00pm'],['1:20pm'],['1:40pm'],
//                         ['2:00pm'],['2:20pm'],['2:40pm'],
//                         ['3:00pm'],['3:20pm'],['3:40pm'],
//                         ['4:00pm'],['4:20pm'],['4:40pm'],
//                         ['5:00pm'],['5:20pm'],['5:40pm'],
//                         ['6:00pm'],['6:20pm'],['6:40pm'],
//                         ['7:00pm'],['7:20pm'],['7:40pm'],
//                         ['8:00pm'],['8:20pm'],['8:40pm'],
//                         ['9:00pm'],['9:20pm'],['9:40pm'],
//                         ['10:00pm'],['10:20pm'],['10:40pm'],
//                         ['11:00pm'],['11:20pm'],['11:40pm']]

//   const createNames1 = () =>{
//     let nameData = []
//     for (let i = 0; i<21; i++)
//     {
//       nameData.push(["amir"])
//     }
//     return(nameData)
//   }

//   const createNames2 = () =>{
//     let nameData = []
//     for (let i = 0; i<33; i++)
//     {
//       nameData.push([" "])
//     }
//     return(nameData)
//   }

//   const handleClick=()=> {
//         console.log('The link was clicked.');
//       }

//   const _alertIndex = () => {
//    let x = prompt("This is where you type your name.");

  
//   }
//   const element = () => (
//       <TouchableOpacity> 
//         <View style={styles.btn}>
//           <Text style={styles.btnText}>{_alertIndex()}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//        //render() {
//           // const state = this.state;
//          return (
//           <SafeAreaView style={styles.container}>
//             <ScrollView style={styles.scrollView}>
//             <View style={styles.container}>
//         <Table borderStyle={{borderWidth: 1}}>
//           <Row data={tableHead} flexArr={[1, 1]} style={styles.head} textStyle={styles.text}/>
          
//          <TableWrapper style={styles.wrapper}>
          
//             <Col data={blockedTimes1} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
//             <Rows data={blockedNames1} flexArr={[1]} style={styles.row} textStyle={styles.text}/>
//           </TableWrapper>

//           <TableWrapper style={styles.wrapper}>
       
//             <Col data={morningTimes} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
//             <Rows flexArr={[1]} style={styles.row} textStyle={styles.text} data = {createNames1()}/>
//           </TableWrapper>

//           <TableWrapper style={styles.wrapper}>
//             <Col data={blockedTimes2} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
//             <Rows data={blockedNames2} flexArr={[1]} style={styles.row} textStyle={styles.text}/>
//           </TableWrapper>
//           <TableWrapper style={styles.wrapper}>
       
//        <Col data={afternoonTimes} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
//        <Rows onClick = {() => element()} data={createNames2()} flexArr={[1]} style={styles.row} textStyle={styles.text}/> 
//      </TableWrapper>


//         </Table>
//       </View>
     
//        </ScrollView>
//      </SafeAreaView>

//          )}
//          const styles = StyleSheet.create({
//           container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//           head: {  height: 40,  backgroundColor: '#f1f8ff'  },
//           wrapper: { flexDirection: 'row' },
//           title: { flex: 1, backgroundColor: '#f6f8fa' },
//           row: {  height: 28  },
//           text: { textAlign: 'center' },
//           btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
//           btnText: { textAlign: 'center', color: 'black' },
//         });
      
//         export default EventScreen
       
// import React, { Component } from 'react';
// import {TouchableOpacity, StyleSheet, View, Text } from 'react-native';
// import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';

// const EventScreen = (props) => {
//   const { eventData } = props; // TODO: data does not yet exist

//   let tableHead = ["Times", "Availability"]

//   let tableTitle = [['12:00am'],['12:20am'],['12:40am'],
//                   ['1:00am'],['1:20am'],['1:40am'],
//                   ['2:00am'],['2:20am'],['2:40am'],
//                   ['3:00am'],['3:20am'],['3:40am'],
//                   ['4:00am'],['4:20am'],['4:40am']]

//   let blockedNames1 = [['Invalid Time Slot'],['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot'], ['Invalid Time Slot'], 
//                       ['Invalid Time Slot']]
//   const element = (data, index) => (
//     <TouchableOpacity onPress={() => _alertIndex(name, index)}>
//       <View style={styles.btn}>
//         <Text style={styles.btnText}>button</Text>
//       </View>
//     </TouchableOpacity>
//   );

//  const _alertIndex = (name, index) => {
//     alert(`This is ${name + index + 1}`);

//   }
                  
//   const createNames1 = () =>{
//     let nameData = []
//     for (let i = 0; i<21; i++)
//     {
//       nameData.push(["amir"])
//     }
//     return(nameData)
//   }
  
//   return (
//     <View style={styles.container}>
//       <Table borderStyle={{borderWidth: 1}}>
//         <Row data={tableHead} flexArr = {[1], [1]} style={styles.head} textStyle={styles.text}/>
//         {
//           tableTitle.map((rowData, index) => (
//             <TableWrapper key={index} style={styles.row} flexArr = {[1], [0]}>
//               {
//                 rowData.map((cellData, cellIndex) => (
//                   <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>
//                 ))
//               }
//             </TableWrapper>
//           ))
//             }
// {
//             blockedNames1.map((rowData, index) => (
//               <TableWrapper key={index} style={styles.row}>
//                 {
//                   rowData.map((cellData, cellIndex) => (
//                     <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>
//                   ))
//                 }
//               </TableWrapper>
//             ))
//           }
//       </Table>
//     </View>

//   )
// }

// const styles = StyleSheet.create({
// container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
// head: {  height: 40,  backgroundColor: '#f1f8ff'  },
// wrapper: { },
// title: { flex: 1, backgroundColor: '#f6f8fa' },
// row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
// text: { textAlign: 'center' },
// btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
// btnText: { textAlign: 'center', color: '#fff' },
// });

// export default EventScreen

import React, { Component } from 'react';
import {TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import EventSlot from '../components/EventSlot'
import EventTime from '../components/EventTime'
const EventScreen = (props) => {
  const { eventData } = props; // TODO: data does not yet exist
  const tableTitle = [['12:00am'],['12:20am'],['12:40am'],
                    ['1:00am'],['1:20am'],['1:40am'],
                    ['2:00am'],['2:20am'],['2:40am'],
                    ['3:00am'],['3:20am'],['3:40am'],
                    ['4:00am'],['4:20am'],['4:40am']]
  const listItems = tableTitle.map((tableTitle, index)=>
<Row size = {50} key = {index} style = {{borderWidth: 1, backgroundColor: "blue",}}>
  <Text> {tableTitle}</Text>
  <Col size ={50} key = {index} style = {{borderWidth: 1, backgroundColor: "red",}}>
    <Text> {tableTitle}</Text>
  </Col>
</Row>

  )
  
return(

<Grid style = {{justifyContent: "space-evenly"}}>
    {listItems}
</Grid>
)
}
export default EventScreen
