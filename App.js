import * as React from 'react';
import { Text, View ,StyleSheet,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CovidUpdate from "./screens/covidUpdate"
import Temperature from "./screens/temperature"
import Remedies from "./screens/remedies"


import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
     <NavigationContainer>
    
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Temperature') {
              iconName = focused
                ? 'thermometer': 'thermometer-outline';

            } else if (route.name === 'Remedies') {
              iconName = focused ? 'medkit' : 'medkit-outline';
            }
            else if (route.name === "CovidUpdate"){
              iconName = focused ? 'cafe' : 'cafe-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'green',
        })}>

       <Tab.Screen name="Temperature" component={ Temperature} />
        <Tab.Screen name="Remedies" component={ Remedies} />
        <Tab.Screen name="CovidUpdate" component={CovidUpdate} />

      </Tab.Navigator>
    </NavigationContainer>
 
   
    
    
  );
  
}

