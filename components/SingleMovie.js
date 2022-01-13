import React from "react";
import { StyleSheet,View, Text, TouchableOpacity, Alert, TextInput, Image } from "react-native";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const SingleMovie = (props) => {
    return(
        <View style={styles.movie}>

            <Image source={{uri: IMAGE_API + props.poster_path}} style={{
                width: '100%',
                height: '80%',
                resizeMode: 'contain',
                flex: 4,
            }}/>

            <Text style={styles.movieTextStyle}> {props.original_title} </Text>


            

        </View>
    );
}

const styles = StyleSheet.create({
   
    movie:{
        backgroundColor: '#6200EA',
        width: '46%',
        height: 330,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        margin: '2%',
        flexDirection: "column",

    },
    movieTextStyle:{
        borderRadius: 8,
        width: '100%',
        backgroundColor: '#000000',
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#FFF',
        textShadowColor: '#000000',
        textShadowRadius: 10,

    }


    

}); 

export default SingleMovie;