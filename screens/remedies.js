import  React , { Component } from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 

 export default class Remedies extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      
    };
  }
   render(){

     return(
        <View style={{backgroundColor:"gray"}}>
        <Image
          source={require("../assets/coollogo_com-286584.gif")}
          style={styles.titleImage}
        ></Image>
        <Text style={{marginTop:40,fontSize:24,fontWeight: 'bolder', textAlign: 'center',
    alignSelf: 'center',}}>  
         Simple Ways To Improve your Immune System
         </Text>
        <Text style={{fontSize:18,fontWeight: 'bolder'}}> 
          Some ways to keep your immune system
          healthy is to Eating healthfully, getting regular physical exercise, getting good sleep, 
          and lowering stress levels are great for immune system . 
         </Text>
         <Text style={{marginTop:40,fontSize:24,fontWeight: 'bolder', textAlign: 'center',
    alignSelf: 'center',}}>  
         FEVER
         </Text>
        <Text style={{marginTop:40,fontSize:18,fontWeight: 'bolder'}}>  
          If you have a fever here are some ways to reduce your fever
          using acetaminophen instead of ibuprofen to help reduce 
          fever and aches and pains related to this coronavirus infection, 
           but now states that either acetaminophen or ibuprofen can be used.</Text>
        </View>
   );
   }
  
 }
   const styles = StyleSheet.create({
       titleImage: {
         width:"100",
         resizeMode: "contain",
  }
     })
 