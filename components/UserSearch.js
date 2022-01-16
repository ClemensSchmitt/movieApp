import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import SearchBarComponent from "./SearchBarComponent";
import SingleMovie from "./SingleMovie";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=debe76e8c00bc3a787ba451864f37299&query=";



const UserSearch = (props) => {

    //Title for api request
    const searchTitle = props.route.params.searchTitle; 

    //Stores movies as json
    const [movies, setMovies] = useState([]);

    //Request movie data from theMovieAPI on load and stores replied data to movies
    useEffect(() => {
        fetch(SEARCH_API + searchTitle.toString())
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
            
            <SearchBarComponent navigation={props.navigation}></SearchBarComponent>

            <View style={styles.headerBar}>
                <Text style={styles.headerText}>
                    Search Resuls for {searchTitle}
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentMoviesContainer} style={styles.moviesContainer}>

                {
                    //Creates a single movie component for each entry in movies
                    movies.map((movie)=> {
                        return( 
                            <Pressable onPress={() => {props.navigation.navigate("Movie", {movieId: movie.id})}}>
                                    <SingleMovie poster_path = {movie.poster_path} title = {movie.title}></SingleMovie>
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
        searchInput: {
        top: 10,
        width: 270,
        height: 35,
        backgroundColor: '#4527A0',
        borderRadius: 8,
      },
      searchbar: {
        backgroundColor: '#6200EA',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
      },
  
    searchIcon:{
        maxWidth: 20,
        maxHeight: 20,
        position: 'absolute',
        right: 50,
        bottom: 20
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
     

  	  //flexDirection: 'column'

    },


    
});


export default UserSearch;