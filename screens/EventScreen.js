import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Component } from 'react';
//const EventScreen = (props) => {
 // const { eventData } = props; // TODO: data does not yet exist

  class EventScreen extends Component{
  
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOff: false};

//     // This binding is necessary to make `this` work in the callback <button onMouseOver={this.changeBackground}>
//     //this.handleClick = this.handleClick.bind(this);
//   }

  changeBackground () {
    this.style.background = 'yellow';
  }

  /*handleClick () {
    this.setState(state => ({
      isToggleOff: !state.isToggleOff
    }));
  }*/

  /*headings = () => {
    let table = []
      for (let i = 0; i<1; i++)
      {
        let children = []
        for(let j = 0; j<1; j++)
        {
          children.push(<td>{"TIME"}</td>)
          children.push(<td>{"Availability"}</td>)
        }
        table.push(<tr>{children}</tr>)
      }
      return(table)
  }*/
   
   
     handleClick = () => {
      console.log('The link was clicked.');
    }
  
    

  createTable = () => {
    let table = []
    let time = "12:00am"
    let time2 = "1:00am"
    let n = ''
    let counter2 = 0;
    let counter = 12;
    
    // Outer loop to create parent
    for (let i = 0; i < 72; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 1; j++) {
    
          children.push(<td>{time}</td>)
          children.push(<td>{'name'+i}</td>)
      
      }

      if(time.length == 7)
      {
        if(counter2 == 12)
            time = time.replace(time.charAt(5)+time.charAt(6), "pm")

        if(time.charAt(3) =='0')
          {
            n = time.replace("00", "20")
            time = n
          }

          else if(time.charAt(3) =='2')
          {
            n = time.replace("20", "40")
            time = n
            if(counter2<12)
              counter2 ++;
            else
              counter2 = 1
          }

          else if(time.charAt(3) =='4')
          {
            n = time.replace("40", "00")
            time = n.replace(n.charAt(0)+n.charAt(1), counter2)
          }
      }
      else if(time.length == 6)
      {
        if(time.charAt(2) =='0')
          {
            n = time.replace("00", "20")
            time = n
          }

          else if(time.charAt(2) =='2')
          {
            n = time.replace("20", "40")
            time = n
            counter2++
          }

          else if(time.charAt(2) =='4')
          {
            n = time.replace("40", "00")
           // let x = charAt(0)
            time = n.replace(n.charAt(0), counter2)
            
          }
      }
      //Create the parent and add the children
      table.push(<tbody><tr>{children}</tr></tbody>)
    }
    return table
  }


  render() {
    

    return(
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
      <table> 
        {this.createTable()}
      </table>
      
      <a href="#" onClick={this.handleClick}>
      Click me
    </a>
    
      
      </ScrollView>
    </SafeAreaView>
    )
  }

}
 

  

      
    
          
    
  /*return (
    
    <View style={styles.container}>
      <Text>Hello Amir!</Text>
    </View>
  );
};*/

EventScreen.navigationOptions = {
  title: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  times: {
    textAlign: 'center',
    backgroundColor: 'red',
    

  },
});

export default EventScreen;
