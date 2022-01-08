import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable} from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, child, onValue} from "firebase/database";
import { get, set } from "firebase/database";
import firebase from "../firebase";

const Login = ({navigation}) => {

    const [state, setState] = useState({
      email: "",
      password: "",
      id: "",
    });

    const textChange = (name, value) => {
      setState({...state, [name]: value})
    };

    const login = () => {
      getNewId();
      if(state.email == ''){
        Alert.alert("Please enter an email");
      }
      else if(state.password == ''){
        Alert.alert("Please enter your password");
      }
      else{
        if(isUserRegistered()){
          navigation.navigate("Dashboard");
        }
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
            setState({...state, ["id"]: id.toString()});
          }
          else{
            var id = 1;
            setState({...state, ["id"]: id.toString()});
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const [requestedDBState, setRequestedDBState] = useState({
      email: "",
      password: "",
    });

    //requestedDBState.email wird noch nicht richtig gesetzt
    function isUserRegistered() {
      for(var i = 1; i < state.id; i++){
        get(child(ref(firebase.db), 'users/userData/' + i.toString() + "/email"))
        .then((snapshot) => {
          if(snapshot.exists()){
            //snapshot.val() liefert das richtige ergebnis
            setRequestedDBState({...requestedDBState, ["email"]: snapshot.val()});
            Alert.alert(requestedDBState.email);
          }
        })
        .catch((error) => {
          console.error(error);
        });
        get(child(ref(firebase.db), 'users/userData/' + i.toString() + "/password"))
        .then((snapshot) => {
          if(snapshot.exists()){
            setRequestedDBState({...requestedDBState, ["password"]: snapshot.val()});
          }
        })
        .catch((error) => {
          console.error(error);
        });
        
        if(requestedDBState.password === state.password && requestedDBState.email === state.email){

          Alert.alert(state.password + "" + requestedDBState.password);
          return true;
        }
      }
    }

    return (
        <View style={styles.container}>

            <View style={styles.logoPicture}>

            </View>

            <View style={styles.loginMask}>
                <TextInput 
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