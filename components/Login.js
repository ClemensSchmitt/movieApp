import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput} from 'react-native';

const Login = () => {

    return (
        <View style={styles.container}>

            <View style={styles.logoPicture}>

            </View>

            <View style={styles.loginMask}>
                <TextInput 
                style={styles.userEmail}
                onChangeText={onChangeNumber}
                value={number}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Email"
                keyboardType="numeric"
                >
            
                </TextInput>
                <TextInput 
                style={styles.userPassword}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Passwort"
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Password"
                keyboardType="numeric"
                >

                </TextInput>
            </View>
            <View style={styles.spacer}>
            
            </View>
        </View>
    )
}

    
const styles = StyleSheet.create({
    container: {
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
        backroundColor:'#6200EA', 
        backgroundColor:'#6200EA', 
        borderRadius: 8,
        padding: 10,
        margin: 5
      
        }, 
        userPasswort:{
        userPassword:{
        flex:1,
        backroundColor:'#6200EA',
        backgroundColor:'#6200EA',
        borderRadius: 8,
        padding: 10,
        margin: 5
        },
        spacer:{
        flex:1,
        }
      
    }
);
    });

export default Login;