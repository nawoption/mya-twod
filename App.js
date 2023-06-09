import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Present from './screens/Present';
import Threed from './screens/Threed';
import Twod from './screens/Twod';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar barStyle={'dark-content'} backgroundColor="#333" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Twod" component={Twod} />
        <Stack.Screen name="Threed" component={Threed} />
        <Stack.Screen name="Present" component={Present} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
