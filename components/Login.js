import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable} from 'react-native';
import { getFirestore, collection, getDocs, snapshotEqual } from 'firebase/firestore/lite';
import { getDatabase, ref, child, onValue} from "firebase/database";
import { get, set } from "firebase/database";
import firebase from "../firebase";
import state from "./Session";
import {proxy, useSnapshot} from "valtio";

const Login = ({navigation}) => {

    const snap = useSnapshot(state);

    const [localState, setLocalState] = useState({
      email: "",
      password: "",
      id: "",
    });

    const textChange = (name, value) => {
      setLocalState({...localState, [name]: value});
    };

    const [loginMassage, setLoginMassage] = useState("");

    const login = () => {
      getNewId();
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

    const getNewId = () => {
      get(child(ref(firebase.db), 'users/userData'))
        .then((snapshot) => {
          if(snapshot.exists()){
            var id = 1;
            var data = snapshot.val();
            for(var entry in data){
              ++id;
            }
            setLocalState({...localState, ["id"]: id.toString()});
          }
          else{
            var id = 1;
            setLocalState({...localState, ["id"]: id.toString()});
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    //requestedDBState.email wird noch nicht richtig gesetzt
    function isUserRegistered() {
      get(child(ref(firebase.db), 'users/userData/'))
      .then((snapshot) => {
        if(snapshot.exists()){          
          for(var i = 1; i < localState.id; i++){
            if(localState.email === snapshot.child(i.toString()).child("email").val().toString() && localState.password === snapshot.child(i.toString()).child("password").val().toString()){
              state.id = i;
              navigation.navigate("Dashboard");
              return;
            }
          }
        }
        else{
          Alert.alert("Can't reach firebase db");
        }
      })
      .catch((error) => {
        console.error(error);
      });
      setTimeout(() => {
        setLoginMassage("Wrong username or password!");
      }, 1500);
    }

    return (
        <View style={styles.container}>

            <View style={styles.logoPicture}>

            </View>

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
            <View style={styles.spacer}>
                <Pressable onPress = {login} title='Login' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Login</Text>
                </Pressable>
                <Pressable onPress = {() => navigation.navigate("Register")} title='Register' style={styles.buttonStyle}>
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
    logoPicture:{
    flex: 1,
    },
    loginMask: {
    flex: 1,
    flexDirection: "column",
    },
    userEmail:{
    flex:1,
    backgroundColor:'#6200EA', 
    borderRadius: 8,
    padding: 10,
    margin: 5,
    color: "#fff"
    }, 
    userPassword:{
    flex:1,
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

export default Login;