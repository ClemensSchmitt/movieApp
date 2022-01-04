import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MustWatchList from './components/MustWatchList';
import Dashboard from './components/Dashboard';
import Top250 from './components/Top250';
import Favorites from './components/Favorites';
import PersonalRanking from './components/PersonalRanking';
import Popular from './components/Popular';
import Recommended from './components/Recommended';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{title: "Dashboard"}} />
        <Stack.Screen name="MustWatchList" component={MustWatchList} options={{title: "Must Watch List"}}/>
        <Stack.Screen name="PersonalRanking" component={PersonalRanking} options={{title: "Personal Ranking"}}/>
        <Stack.Screen name="Favorites" component={Favorites} options={{title: "Favorites"}}/>
        <Stack.Screen name="Top250" component={Top250} options={{title: "Top 250"}}/>
        <Stack.Screen name="Popular" component={Popular} options={{title: "Popular"}}/>
        <Stack.Screen name="Recommended" component={Recommended} options={{title: "Recommended"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack;