import {React, useState, useEffect} from "react";
import { StyleSheet,View, Text, Image, Dimensions} from "react-native";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";


//Single movie component is used to visualize replies from theMovieAPI
const SingleMovie = (props) => {

    //State stores dimensions of smartphone screen
    const [singleMovieDimensions, setSingleMovieDimensions] = useState({
        width: 150,
        height: 200,
    })

    //Detect dimensions of smartphone screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    //Stores dimensions of smartphonescreen onload
    //Important to visualize two movies in a row 
    useEffect(() => {
        setSingleMovieDimensions({...singleMovieDimensions, ["width"]: windowWidth/2-2, ["height"]: windowHeight/2-2});
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
        marginTop: 20,      
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