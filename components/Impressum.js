import React from "react";
import { StyleSheet, Text, View} from 'react-native';

const Impressum = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Text style={styles.headerText}>
                    Impressum
                </Text>
            </View>
            <View style={styles.spacer}></View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>FILMLIST ©</Text>
                <Text style={styles.description}>Clemens Schmitt (10011682) + Julius Nielsen (10011814)</Text>
                <Text style={styles.description}>Mobile Computing WiSe 2021/2022</Text>
                <Text style={styles.description}>Prof. Dr. Fatih Gedikli</Text>
            </View>
       
           
            

            <View style={styles.spacer}></View>
        </View>
    )
}

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "column",
        justifyContent: "space-between",
    },

    headerBar:{
        
        padding: '1%',
        marginHorizontal: '2%',
        marginTop:30,
        backgroundColor: '#4527A0',
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
    descriptionContainer:{
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 8,

    },
    description:{
        color:'#fff',
        textAlign:"center",
        marginVertical:5,

    },
    buttonContainer:{

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