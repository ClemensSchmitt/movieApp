import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {proxy, useSnapshot} from "valtio";
import state from "./Session";
import {React, useState} from 'react';
import UserSearch from './UserSearch';
import { endAt } from 'firebase/firestore/lite';
import MyStack from '../App.js';


const SearchBarComponent = ({navigation}) => {

  const [searchTitle, setSearchTitle] = useState({
    title: "",
  });

  return (

      <View style={styles.searchbar}>
          <TextInput style={styles.searchInput} onChangeText={

            (value)=> {
                setSearchTitle({...searchTitle,["title"]:value});

          }
              //(value)=>{setSearchTitle(value)}
            }>
          </TextInput>

          <Pressable  
          onPress={
          //()=> Alert.alert( (navigation == null).toString() )
          ()=> navigation.navigate("UserSearch", {searchTitle: searchTitle.title})
          }
          title='UserSearch' 
          style={styles.pressableSearch}
          
          >

            <Image source={require('../assets/search.png')} style={styles.searchIcon}/>

          </Pressable>
      </View>

  );
}
const styles = StyleSheet.create({
  
  
 
  searchbar: {
    backgroundColor: '#6200EA',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }, 
  searchInput: {
    flex: 8,
    marginLeft: 40,
    marginBottom: 5,
    height: 35,
    backgroundColor: '#4527A0',
    borderRadius: 8,
  },
  pressableSearch:{
    flex: 1,
    maxWidth: 35,
    maxHeight: 35,
    marginRight: 40,
    marginBottom: 5,
    marginLeft: 5,

  },
  searchIcon:{
    maxWidth: '90%',
    maxHeight: '90%',
    alignSelf: 'center',
  }
});

export default SearchBarComponent;