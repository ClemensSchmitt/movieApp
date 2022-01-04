import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable} from 'react-native';

const Register = ({navigation}) => {

    return (
        <View style={styles.container}>

            <View style={styles.logoPicture}>

            </View>

            <View style={styles.registerMask}>
                <TextInput 
                style={styles.userEmail}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Email"
                keyboardType="numeric"
                >
            
                </TextInput>
                <TextInput 
                style={styles.userPassword}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Password"
                keyboardType="numeric"
                >

                </TextInput>
                <TextInput 
                style={styles.userRepeatPassword}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Repeat Password"
                keyboardType="numeric"
                >

                </TextInput>
            </View>
            <View style={styles.spacer}>
                <Pressable onPress = {() => navigation.navigate("RegisterSuccessful")} title='RegisterSuccessful' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Continue</Text>
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
    margin: 5
    
    }, 
    userPassword:{
    flex:1,
    backgroundColor:'#6200EA',
    borderRadius: 8,
    padding: 10,
    margin: 5
    },
    userRepeatPassword:{
    flex:1,
    backgroundColor:'#6200EA',
    borderRadius: 8,
    padding: 10,
    margin: 5
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