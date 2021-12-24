import  React , { Component } from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

 

 export default class Week extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      
    };
  }
   render(){

     return(
        <View>
        
        <Image
          source={require("../assets/coollogo_com-286584.gif")}
          style={styles.titleImage}
        ></Image>
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
 