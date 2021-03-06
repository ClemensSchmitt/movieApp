import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MustWatchList from './components/MustWatchList';
import Dashboard from './components/Dashboard';
import Top20 from './components/Top20';
import Favorites from './components/Favorites';
import Popular from './components/Popular';
import Login from './components/Login';
import Register from './components/Register';
import Impressum from './components/Impressum';
import Profile from './components/Profile';
import Movie from './components/Movie';
import UserSearch from './components/UserSearch';
import Session from './components/Session'

const Stack = createStackNavigator();

//Navigation
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{title: "Login"}} />
        <Stack.Screen name="Register" component={Register} options={{title: "Register"}} />
        <Stack.Screen name="Profile" component={Profile} options={{title: "Profile"}} />
        <Stack.Screen name="Impressum" component={Impressum} options={{title: "Impressum"}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{title: "Dashboard"}} />
        <Stack.Screen name="MustWatchList" component={MustWatchList} options={{title: "Must Watch List"}}/>
        <Stack.Screen name="Favorites" component={Favorites} options={{title: "Favorites"}}/>
        <Stack.Screen name="Top20" component={Top20} options={{title: "Top 20"}}/>
        <Stack.Screen name="Popular" component={Popular} options={{title: "Popular"}}/>
        <Stack.Screen name="Movie" component={Movie} options={{title: "Movie"}}/>
        <Stack.Screen name="UserSearch" component={UserSearch} options={{title: "UserSearch"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default MyStack;