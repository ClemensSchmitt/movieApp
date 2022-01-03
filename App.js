import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import database from '@react-native-firebase/database';
import MustWatchList from './components/MustWatchList';
import Dashboard from './components/Dashboard';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{title: "Dashboard"}}/>
        <Stack.Screen name="MustWatchList" component={MustWatchList} options={{title: "Must Watch List"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack;