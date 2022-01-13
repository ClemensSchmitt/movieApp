import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable} from 'react-native';
import SearchBarComponent from "./SearchBarComponent";

const Profile = ({navigation}) => {

    return (
        <View style={styles.container}>
            
            <SearchBarComponent navigation={navigation}></SearchBarComponent>

            <View style={styles.header}>

                <Text style={styles.headerTextStyle}>Profile</Text>

            </View>


            <View style={styles.buttonContainer}>
                <Pressable onPress = {() => navigation.navigate("Favorites")} title='Favorites' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Favorites</Text>
                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable onPress = {() => navigation.navigate("PersonalRanking")} title='PersonalRanking' style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>PersonalRanking</Text>
                </Pressable>
            </View>

            <View style={styles.spacer}>
                
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.headerTextStyle}>Logout Button</Text>
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
        padding: 20,
        flexDirection: "column",
    },
    header: {
        flex: 1,
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

export default Profile;