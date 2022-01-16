import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import SearchBarComponent from "./SearchBarComponent";
import SingleMovie from "./SingleMovie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=debe76e8c00bc3a787ba451864f37299&page=1";


const Popular = ({navigation}) => {

    //Stores movies in json
    const [movies, setMovies] = useState([]);


    //Starts on load fetch requests for the top 20 movies
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
        
     

  	  //flexDirection: 'column'

    },


    
});


export default Popular;