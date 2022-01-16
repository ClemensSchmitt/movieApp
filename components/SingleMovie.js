import {React, useState, useEffect} from "react";
import { StyleSheet,View, Text, TouchableOpacity, Alert, TextInput, Image, Dimensions} from "react-native";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";



const SingleMovie = (props) => {

    
    const [singleMovieDimensions, setSingleMovieDimensions] = useState({
        width: 150,
        height: 200,
    })

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        setSingleMovieDimensions({...singleMovieDimensions, ["width"]: windowWidth/3, ["height"]: windowHeight/3});
    }, [])


    return(
        
        <View style={styles.movie, singleMovieDimensions}>

            <Image 
            source={{uri: IMAGE_API + props.poster_path}} 
            style={{
                width: '100%',
                resizeMode: 'cover',
                flex: 4,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            }}/>

            <Text style={styles.movieTextStyle}> {props.title} </Text>

        </View>
    );
}

const styles = StyleSheet.create({
   
    movie:{
        //backgroundColor: '#6200EA',
        borderRadius: 8,
        //alignItems: 'center',
        
        //justifyContent: 'space-around',
        //alignSelf: 'stretch',
        marginVertical: 10,
        //flexDirection: "column",

    },
    movieTextStyle:{
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
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