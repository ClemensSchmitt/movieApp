import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable} from 'react-native';

const Register = ({navigation}) => {


    const [state, setState] = useState({
      email: "",
      password: "",
      repeatPassword: "",
    });


    const textChange = (name, value) => {
      setState({...state, [name]: value})
    };

    const register = () => {
      if(state.email == ''){
        Alert.alert("Please enter an email");
      }
      else if(state.password == ''){
        Alert.alert("Please enter your password");
      }
      else if(state.repeatPassword == ''){
        Alert.alert("Please repeat your password");
      }
      else{
        
        //Email must be unique -- if
        //Email must contain "@" and "."
        navigation.navigate("RegisterSuccessful");
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