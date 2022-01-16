import { StyleSheet, Text, View, Pressable, Image, Alert, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {proxy, useSnapshot} from "valtio";
import state from "./Session";
import {React, useState} from 'react';
import SearchBarComponent from "./SearchBarComponent";



const Dashboard = ({navigation}) => {

  //This is how to use the global Session
  const snap = useSnapshot(state);  
  const [searchTitle, setSearchTitle] = useState({
    title: "",
  });
  const image = {uri: "https://image.tmdb.org/t/p/w1280/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"}

  const searchWithInput = () => {

    if(searchTitle.title != "" && searchTitle.title != " "){
      navigation.navigate("UserSearch", {searchTitle: searchTitle.title})
    }

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.backgroundShader} >

          <View style={styles.spacer}></View>
          <View style={styles.spacer}></View>


          <View style={styles.searchbar}>
              <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor={'gray'} TextColor={'white'} onChangeText={

                (value)=> {
                    setSearchTitle({...searchTitle,["title"]:value});

              }
                  //(value)=>{setSearchTitle(value)}
                }>
              </TextInput>

              <Pressable  
              onPress={
                
                ()=> searchWithInput()
              }
              title='UserSearch' 
              style={styles.pressableSearch}
              
              >

                <Image source={require('../assets/search.png')} style={styles.searchIcon}/>

              </Pressable>
          </View>



          <View style={styles.spacer}></View>

          <View style={styles.buttonContainerContainer} >
            <View style={styles.buttonContainerWrapper} >

              <View style={styles.buttonContainer}>
                  <Pressable onPress = {() => navigation.navigate("Popular")} title='Popular' style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Popular</Text>
                  </Pressable>
                  <Pressable onPress = {() => navigation.navigate("Top20")} title='Top20' style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Top 20</Text>
                  </Pressable>
              </View>
              <View style={styles.buttonContainer}>
                  <Pressable onPress = {() => navigation.navigate("Profile")} title='Profile' style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>My Profile</Text>
                  </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.spacer}></View>
          <View style={styles.spacer}></View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
  image: {
    
    //backgroundColor: 'rgba(0,0,0,0.5)',
    
    flex: 1,
    //justifyContent: "center"
  },
  backgroundShader:{
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: "center"
  },
  searchbar: {
    borderRadius: 8,
    backgroundColor: '#6200EA',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  }, 
  searchInput: {
    flex: 8,
    paddingLeft:15,
    marginLeft: 10,
    color: 'white' ,
    
    height: 50,
    backgroundColor: '#4527A0',
    borderRadius: 8,
    fontSize: 20,
  },
  pressableSearch:{
    flex: 1,
    maxWidth: 35,
    maxHeight: 35,
    marginRight: 10,
    
    marginLeft: 10,

  },
  searchIcon:{
    maxWidth: '90%',
    maxHeight: '90%',
    alignSelf: 'center',
  },
  spacer: {
      flex:1,
  },
  buttonContainerContainer:{


    
     
     flex:1,

     //marginVertical: 20,

     justifyContent: 'center',

     
 },
  buttonContainerWrapper:{

     borderRadius: 8,
     
      
      height: 180,
      padding: 20,
      //marginVertical: 20,
      backgroundColor: "#4527A0",
      justifyContent: 'center',

      
  },
  
  buttonContainer: {
    
    //top: 10,
    //flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10, 
    //maxHeight: 80,
    justifyContent: 'space-around',
  },

  buttonStyle: {
    backgroundColor: '#6200EA',
    height: 50,
    width: 120,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 12,
  },
  buttonTextStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
    top: 15,
    textShadowColor: '#000000',
    textShadowRadius: 10,
  },
 
 
 
});

export default Dashboard;