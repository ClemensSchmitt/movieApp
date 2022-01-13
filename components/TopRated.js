import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image, ScrollView} from 'react-native';


import SingleMovie from "./SingleMovie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=debe76e8c00bc3a787ba451864f37299&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=debe76e8c00bc3a787ba451864f37299&query=";



const TopRated = () => {



    

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data)=> {
                setMovies(data.results);
                //Alert.alert((movies[0].original_title).toString());
            })


            .catch((error) => {
                console.error(error);
            })
    },[]);

    //setMovies([...movies, 1]);

    return(
       
        <View style={styles.container}>
            <View style={styles.searchbar}>
            
                <TextInput style={styles.searchInput} onChange={() => {}}>
                
                </TextInput>

                <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
                
            </View>

            <ScrollView style={styles.moviesContainer}  >

                {
                    movies.map((movie)=> {
                        return( 
                            <SingleMovie poster_path = {movie.poster_path} original_title = {movie.original_title}></SingleMovie>
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

    },
    searchIcon:{
        maxWidth: 20,
        maxHeight: 20,
        position: 'absolute',
        right: 50,
        bottom: 20
    },
    moviesContainer:{
        flexWrap: "wrap",
    },

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


export default TopRated;