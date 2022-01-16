import React, {useState} from "react";
import { StyleSheet, Text, View, Alert, TextInput, Pressable,Image} from 'react-native';
import { ref, child, get, set} from "firebase/database";
import firebase from "../firebase";
import state from "./Session";
import {proxy, useSnapshot} from "valtio";

const Register = ({navigation}) => {

    const snap = useSnapshot(state);

    //State for storing login data
    const [localState, setLocalState] = useState({
      email: "",
      password: "",
      repeatPassword: "",
      id: "default",
    });

    //Sets the localState if text input changes
    const textChange = (name, value) => {
      setLocalState({...localState, [name]: value})
    };

    //Writes the new user data the firebase db if the check of login data was successful
    const writeUserData = () => {
      if(firebase.db != null){
        var reference = ref(firebase.db, 'users/userData/' + localState.email.replace(".", "--DOT--"));
        set(reference, {
          password: localState.password,
        });
      }
      else{
        Alert.alert("Database connection error");
      }
    }

    //Checks if the email is already used
    function isEmailUnique() {
      //Requests data for the used email
      get(child(ref(firebase.db), 'users/userData/' + localState.email.replace(".", "--DOT--")))
      .then((snapshot) => {
        if(snapshot.exists()){
          //If the replied data is null the register progress continues
          if(snapshot.val() != null){
            Alert.alert("Email is already used");
            return false;
          }
          //Writes data
          writeUserData();
          //The emails is stored in state.email to use the current users email later
          state.email = localState.email;
          navigation.navigate("Dashboard");
        }else{
          //Writes data
          writeUserData();
          //The emails is stored in state.email to use the current users email later
          state.email = localState.email;
          navigation.navigate("Dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }

    //Checks requirements for a register
    const register = () => {

      if(localState.email == ''){
        Alert.alert("Please enter an email");
      }
      else if(!localState.email.includes("@") || !localState.email.includes(".")){
        Alert.alert("Please use an valid email!");
      }
      else if(localState.password == ''){
        Alert.alert("Please enter your password");
      }
      else if(localState.repeatPassword == ''){
        Alert.alert("Please repeat your password");
      }
      else if(localState.password != localState.repeatPassword){
        Alert.alert("Please repeat your password");
      }
      else if(localState.password.length < 8){
        Alert.alert("The password must contain minimal 8 characters")
      }
      else if(localState.email.includes("#") || localState.email.includes("$") || localState.email.includes("[") || localState.email.includes("]")){
        Alert.alert("#, $, [, ] Are not allowed in Emails");
      }
      else if(localState.password != localState.repeatPassword){
        Alert.alert("Password and repeated password must be equal");
      }
      else{
        isEmailUnique();
      }
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.logoPictureContainer}>

            <Image source={require('../assets/Logo.png')} style={styles.logoPicture}/>

            </View>

            <Text style={styles.brandName}>FILMLIST</Text>

            <View style={styles.registerMask}>
                <TextInput 
                style={styles.userEmail}
                onChangeText={(value) => textChange("email", value)}
                placeholder="Email"
                placeholderTextColor={"#fff"}
                >
                </TextInput>
                <TextInput 
                style={styles.userPassword}
                onChangeText={(value) => textChange("password", value)}
                secureTextEntry={true}
                password={true}
                autoCorrect={false}
                placeholderTextColor={"#fff"}
                placeholder="Password"
                >
                </TextInput>
                <TextInput 
                style={styles.userRepeatPassword}
                onChangeText={(value) => textChange("repeatPassword", value)}
                secureTextEntry={true}
                password={true}
                autoCorrect={false}
                placeholderTextColor={"#fff"}
                placeholder="Repeat Password"
                >

                </TextInput>
            </View>
            <View style={styles.spacer}>
                <Pressable onPress = {register} title='RegisterSuccessful' style={styles.buttonStyle}>
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
    
    registerMask: {
    flex: 2,
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
    //flex:1,
    backgroundColor:'#6200EA',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    color: "#fff"
    },
    userRepeatPassword:{
    //flex:1,
    backgroundColor:'#6200EA',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    color: "#fff"
    },
    spacer:{
    flex:1,
    },
    buttonStyle: {
        margin:5,
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
      buttonTextStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFF',
        top: 15,
        textShadowColor: '#000000',
        textShadowRadius: 10,
      },

});

export default Register;