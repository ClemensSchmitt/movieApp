import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image, ScrollView, Pressable} from 'react-native';
import { getFirestore, collection, getDocs, snapshotEqual } from 'firebase/firestore/lite';
import { getDatabase, ref, child, onValue, push} from "firebase/database";
import { get, set } from "firebase/database";
import firebase from "../firebase";
import state from "./Session";
import {proxy, useSnapshot} from "valtio";
import SearchBarComponent from "./SearchBarComponent";
import SingleMovie from "./SingleMovie";

const MOVIE_ID_API = "https://api.themoviedb.org/3/movie/--MOVIE_ID--?api_key=debe76e8c00bc3a787ba451864f37299";



const Favorites = ({navigation}) => {

    class Movie {
      constructor(title, id, posterPath){
        this.title = title;
        this.id = id;
        this.posterPath = posterPath;
      }
    }

    const [movies, setMovies] = useState([]);
    const [showComponent, setShowComponent] = useState(false);

    const loadMovieData = () => {
      get(child(ref(firebase.db), 'users/userData/' + state.email.replace(".", "--DOT--") + '/favorites'))
        .then((snapshot) => {
          if(snapshot.exists()){
            //Alert.alert(snapshot.val().Encanto.movieId.toString());
            var ids = [];
            for(var elem in snapshot.val()){
              ids.push(elem);
            }
            return ids;
          }
        })
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
            {showComponent && movies.map((movie)=> {
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