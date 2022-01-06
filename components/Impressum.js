import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable} from 'react-native';

const Impressum = ({navigation}) => {

    return (
        <View style={styles.container}>

            <Text style={styles.headerTextStyle}>Impressum</Text>

       
           
            <View style={styles.spacer}>
                <Pressable onPress = {() => navigation.navigate("Dashboard")} title='Lets Go!' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Dashboard</Text>
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

    headerTextStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFF',
        top: 15,
        textShadowColor: '#000000',
        textShadowRadius: 10,
        flex: 1,
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

export default Impressum;