import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {ref, child} from "firebase/database";
import {get} from "firebase/database";
import firebase from "../firebase";
import state from "./Session";
import {proxy, useSnapshot} from "valtio";
import SearchBarComponent from "./SearchBarComponent";
import SingleMovie from "./SingleMovie";

const MOVIE_ID_API = "https://api.themoviedb.org/3/movie/--MOVIE_ID--?api_key=debe76e8c00bc3a787ba451864f37299";



const Favorites = ({navigation}) => {

    //Class for data of movies to store in movies state
    class Movie {
      constructor(title, id, posterPath){
        this.title = title;
        this.id = id;
        this.posterPath = posterPath;
      }
    }

    const [movies, setMovies] = useState([]);
    const [showComponent, setShowComponent] = useState(false);

    //loads data for movies from firebase and theMovieAPI 
    const loadMovieData = () => {
      //Gets list of movie ids of user from firebase
      get(child(ref(firebase.db), 'users/userData/' + state.email.replace(".", "--DOT--") + '/favorites'))
        .then((snapshot) => {
          if(snapshot.exists()){
            var ids = [];
            for(var elem in snapshot.val()){
              ids.push(elem);
            }
            return ids;
          }
        })
        //Sending fetch requests for each movie id and saves the replied title, id and poster path as movie object in the movies state
        .then((ids) => {
          var arr = [];
          ids.forEach(id => {
            fetch(MOVIE_ID_API.replace("--MOVIE_ID--", id))
            .then((res) => res.json())
            .then((data)=> {
                arr.push(new Movie(data.title, data.id, data.poster_path));
            })
            .catch((error) => {
                console.error(error);
            })
          });
          return arr;
        })
        //Sets the singleMovie components visible after the previous request progress finished on visible
        .then((arr) => {
          setMovies(arr)
          setTimeout(() => {
               setShowComponent(true);       
          }, 30)
        })
        .catch((error) => {
          console.error(error);
        });
    }

    //Starts loading data for singleMovies
    useEffect(() => {
      setMovies([]);
      loadMovieData();
    }
    ,[]);

    return(
        <View style={styles.container}>
            <SearchBarComponent navigation={navigation}></SearchBarComponent>
            <View style={styles.headerBar}>
                <Text style={styles.headerText}>
                    Favorites
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentMoviesContainer} style={styles.moviesContainer} >
            {
              //Sets visible if requests finished
              //Creates a single movie component for each entry in movies
              showComponent && movies.map((movie)=> {
                        return( 
                            <Pressable onPress={() => {navigation.navigate("Movie", {movieId: movie.id})}}>
                                <SingleMovie poster_path = {movie.posterPath} title = {movie.title}/>
                            </Pressable>
                        ); })              
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

export default Favorites;