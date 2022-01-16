import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import SearchBarComponent from "./SearchBarComponent";


import SingleMovie from "./SingleMovie";

const FEATURED_API = "https://api.themoviedb.org/3/movie/top_rated?api_key=debe76e8c00bc3a787ba451864f37299&language=en-US&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=debe76e8c00bc3a787ba451864f37299&query=";



const Top20 = ({navigation}) => {

    //Storage of movies as json
    const [movies, setMovies] = useState([]);

    //Requests data from theMovieAPI on load an stores single movies in movies state
    useEffect(() => {
        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data)=> {
                setMovies(data.results);
            })
            .catch((error) => {
                console.error(error);
            })
    },[]);

    return(
       
        <View style={styles.container}>
            
                <SearchBarComponent navigation={navigation}></SearchBarComponent>

            
            <View style={styles.headerBar}>
                <Text style={styles.headerText}>
                    Top 20 by User Rating
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentMoviesContainer} style={styles.moviesContainer} >

                {
                    //Creates a single movie component for each entry in movies
                    movies.map((movie)=> {
                        return( 
                            <Pressable onPress={() => {navigation.navigate("Movie", {movieId: movie.id})}}>
                                <SingleMovie poster_path = {movie.poster_path} title = {movie.title}/>
                            </Pressable>
                        );
                    })
                }

            </ScrollView>

        </View>
        
        
        
    
    );
    
}

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    contentMoviesContainer:{
        flexWrap: "wrap",

        //justifyContent: 'flex-start',
  
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    moviesContainer:{
     

  	  flexDirection: 'column'

    },


    
});


export default Top20;