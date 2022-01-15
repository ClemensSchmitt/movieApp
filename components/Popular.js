import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image, ScrollView, Pressable} from 'react-native';
import SearchBarComponent from "./SearchBarComponent";
import SingleMovie from "./SingleMovie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=debe76e8c00bc3a787ba451864f37299&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=debe76e8c00bc3a787ba451864f37299&query=";



const Popular = ({navigation}) => {

    const [movies, setMovies] = useState([]);

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
                    Most Popular
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentMoviesContainer} style={styles.moviesContainer} >

                {
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
        
     

  	  //flexDirection: 'column'

    },


    
});


export default Popular;