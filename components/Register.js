import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { get, set } from "firebase/database";
import React, {useState} from "react";
import { StyleSheet, Text, View, Alert, TextInput, Pressable} from 'react-native';
import firebase from "../firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, child, onValue} from "firebase/database";



const Register = ({navigation}) => {

    const [state, setState] = useState({
      email: "",
      password: "",
      repeatPassword: "",
      id: "1",
    });


    const textChange = (name, value) => {
      setState({...state, [name]: value})
    };

    const writeUserData = () => {
      if(firebase.db != null){
        set(ref(firebase.db, 'users/userData/' + state.id), {
          email: state.email,
          password: state.password,
        });
        
      }
      else{
        Alert.alert("Database connection error");
      }
    }

    //Returns the id of the new user
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

    /*
    //Könnte durchaus effizienter sein
    //Stellt für jeden Eintrag eine Abfrage aber da firebase in Gb abrechnet kann man das ignorieren denke ich
    function isEmailUnique() {
      for(var i = 1; i < state.id; i++){
        get(child(ref(firebase.db), 'users/userData/' + i.toString() + "/email"))
        .then((snapshot) => {
          if(snapshot.exists()){
            var data = snapshot.val();
            //Alert.alert(data + " " + state.email + " " + (state.email === data).toString());
            if(data === state.email){
              return false;
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
    }
    */

    async function isEmailUnique() {
      getNewId();
      get(child(ref(firebase.db), 'users/userData/'))
      .then((snapshot) => {
        if(snapshot.exists()){
          //Alert.alert(snapshot.child('3').child('email').val().toString());
          for(var i = 0; i < parseInt(state.id); i++){
            if(snapshot.child(i.toString()).child('email').exists() && snapshot.child(i.toString()).child('email').val().toString() === state.email){
              Alert.alert("Email already used");
              return false;
            }
          }
          writeUserData();
          
          navigation.navigate("Dashboard");
        }else{
          writeUserData();
          navigation.navigate("Dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }


    const register = () => {
      getNewId();

      if(state.email == ''){
        Alert.alert("Please enter an email");
      }
      else if(!state.email.includes("@") || !state.email.includes(".")){
        Alert.alert("Please use an valid email!");
      }
      else if(state.password == ''){
        Alert.alert("Please enter your password");
      }
      else if(state.repeatPassword == ''){
        Alert.alert("Please repeat your password");
      }
      else if(state.password != state.repeatPassword){
        Alert.alert("Please repeat your password");
      }
      else if(state.password.length < 8){
        Alert.alert("The password must contain minimal 8 characters")
      }
      else if(state.password != state.repeatPassword){
        Alert.alert("Password and repeated password must be equal");
      }
      else{
        isEmailUnique();
      }
    }

    return (
        <View style={styles.container}>

            <View style={styles.logoPicture}>

            </View>

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
    logoPicture:{
    flex: 1,
    },
    registerMask: {
    flex: 2,
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
    userRepeatPassword:{
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

export default Register;