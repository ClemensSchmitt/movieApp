import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable} from 'react-native';
import SearchBarComponent from "./SearchBarComponent";

const Profile = ({navigation}) => {

    

    return (
        <View style={styles.container}>
            
            <SearchBarComponent navigation={navigation}></SearchBarComponent>

            <View style={styles.headerBar}>
                <Text style={styles.headerText}>
                    Profile
                </Text>
            </View>


            <View style={styles.buttonContainer}>
                <Pressable onPress = {() => navigation.navigate("Favorites")} title='Favorites' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Favorites</Text>
                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable onPress = {() => navigation.navigate("MustWatchList")} title='MustWatchList' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Must Watch List</Text>
                </Pressable>
            </View>

            <View style={styles.spacer}>
                
            </View>

            <View style={styles.buttonContainer}>
                <Pressable   Pressable onPress = {() => navigation.navigate("Login")} title='Login' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Logout Button</Text>
                </Pressable>
            </View>

            <View style={styles.spacer}>
                
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress = {() => navigation.navigate("Impressum")} title='Impressum' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Impressum</Text>
                </Pressable>
            </View>






        </View>
    )
}

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    headerBar:{
        padding: '1%',
        margin: '2%',
        backgroundColor: '#6200EA',
        borderRadius: 8,
        opacity: 50,


    },
    headerText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 30,
        
        textShadowColor: '#000000',
        textShadowRadius: 10,
    },

    spacer:{
        flex:1,
    },

    buttonContainer:{
        padding: 20,
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

export default Profile;