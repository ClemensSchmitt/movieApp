import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable,Image} from 'react-native';
import {ref, child} from "firebase/database";
import { get, set } from "firebase/database";
import firebase from "../firebase";
import state from "./Session";
import {proxy, useSnapshot} from "valtio";

const Login = ({navigation}) => {

    const snap = useSnapshot(state);

    //State for storing login data
    const [localState, setLocalState] = useState({
      email: "",
      password: "",
      id: "",
    });

    //Sets the localState if text input changes
    const textChange = (name, value) => {
      setLocalState({...localState, [name]: value});
    };

    const [loginMassage, setLoginMassage] = useState("");

    //Checks requirements of email address and stats check of user data 
    const login = () => {
      if(localState.email == ''){
        Alert.alert("Please enter an email");
      }
      else if(localState.password == ''){
        Alert.alert("Please enter your password");
      }
      else{
        isUserRegistered(); 
      }
    }

    //Compares data of user with user data on firebase db
    function isUserRegistered() {
      //Checks if email exists in db
      //If email exists and password is correct the emails is stored in state.email to use the current users email later
      get(child(ref(firebase.db), 'users/userData/' + localState.email.replace(".", "--DOT--")))
      .then((snapshot) => {
        if(snapshot.exists()){          
          if(snapshot.val() != null && snapshot.val().password === localState.password){
            state.email = localState.email;
            navigation.navigate("Dashboard");
          }
        }
        else{
          Alert.alert("Wrong username or password!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return (
        <View style={styles.container}>

            <View style={styles.logoPictureContainer}>

            <Image source={require('../assets/Logo.png')} style={styles.logoPicture}/>

            </View>

            <Text style={styles.brandName}>FILMLIST</Text>

            <Text>{loginMassage}</Text>

            <View style={styles.loginMask}>
                <TextInput 
                email="default"
                style={styles.userEmail}
                placeholder="Email"
                placeholderTextColor={"#fff"}
                onChangeText={(value) => textChange("email", value)}
                >
                </TextInput>
                <TextInput 
                style={styles.userPassword}
                placeholder="Password"
                placeholderTextColor={"#fff"}
                onChangeText={(value) => textChange("password", value)}
                secureTextEntry={true}
                password={true}
                autoCorrect={false}
                >
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress = {login} title='Login' style={styles.loginButtonStyle}>
                <Text style={styles.buttonTextStyle}>Login</Text>
                </Pressable>
                <Pressable onPress = {() => navigation.navigate("Register")} title='Register' style={styles.registerButtonStyle}>
                <Text style={styles.buttonTextStyle}>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}

    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection: "column",
    },
      logoPictureContainer:{
      flex: 1,
      
    },
    logoPicture:{
      marginTop: 90,
      flex:1,
      alignSelf:'center',
      resizeMode: 'contain',
      height: 100,
      width: 100,
    },
    
    brandName:{
        fontSize: 50,
        alignSelf:"center",
    },
    loginMask: {
      flex: 1,
      flexDirection: "column",
    },

    userEmail:{
      //flex:1,
      backgroundColor:'#6200EA', 
      borderRadius: 8,
      padding: 10,
      margin: 5,
      color: "#fff"
    }, 

    userPassword:{
        backgroundColor:'#6200EA',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        color: "#fff"
    },

    buttonContainer:{
        flex:1,
    },

    loginButtonStyle: {
      margin: 5,
        backgroundColor: '#6200EA',
        height: 50,
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
    registerButtonStyle: {
      margin: 5,
      backgroundColor: 'gray',
      height: 50,
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

export default Login;