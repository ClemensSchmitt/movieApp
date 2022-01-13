import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image, ScrollView, Pressable} from 'react-native';
import { getFirestore, collection, getDocs, snapshotEqual } from 'firebase/firestore/lite';
import { getDatabase, ref, child, onValue} from "firebase/database";
import { get, set } from "firebase/database";
import firebase from "../firebase";
import state from "./Session";
import {proxy, useSnapshot} from "valtio";
import Favorites from "./Favorites";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const FEATURED_API = "https://api.themoviedb.org/3/movie/XXXXXXX?api_key=debe76e8c00bc3a787ba451864f37299";

const Movie = (props) => {

  const movieId = props.route.params.movieId;

  const [movieState, setMovieState] = useState({
    title: "",
    posterPath: "",
    description: "",
  });

  useEffect(() => {
    var dataPath = FEATURED_API.replace("XXXXXXX", movieId.toString());
    fetch(dataPath)
    .then((res) => res.json())
    .then((data)=> {
      setMovieState({...movieState, ["title"]: data.original_title, ["posterPath"]: data.poster_path, ["description"]: data.overview});
    })
    .catch((error) => {
        console.error(error);
    })
  }, []);


  const getNewId = (path) => {
    get(child(ref(firebase.db), 'users/userData/' + path))
      .then((snapshot) => {
        if(snapshot.exists()){
          var id = 1;
          var data = snapshot.val();
          for(var entry in data){
            ++id;
          }
          return id;
        }
        else{
          return 1;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const addToFavorites = (id) => {
    /*if(firebase.db != null){
      set(ref(firebase.db, 'users/userData/' + id.toString() + '/favorites'), {
        movieId: movieId.toString
      });
    }
    else{
      Alert.alert("Database connection error");
    }*/
  }

  const addToWatchList = (id) => {
    /*if(firebase.db != null){
      set(ref(firebase.db, 'users/userData/' + id.toString() + '/watchlist'), {
        movieId: movieId.toString
      });
    }
    else{
      Alert.alert("Database connection error");
    }*/
  }


  return (
    <View style={styles.container}>
        <View style={styles.searchbar}>
          <TextInput style={styles.searchInput}>
          </TextInput>
          <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>
            {movieState.title}
          </Text>
          <View>
            <Pressable onPress = {() => addToWatchList()}>
            <Text>Add Watchlist</Text> 
            </Pressable>
            <Pressable onPress = {() => addToFavorites()}>
            <Text>Favorites</Text>
            </Pressable>    
          </View>
          <View>
          <Text>
            {movieState.description}
          </Text>
          </View>
          <View>
          </View>
          <Image source={{uri: IMAGE_API + movieState.posterPath}} style={{
                width: '100%',
                height: '80%',
                resizeMode: 'contain',
          }}/>

          <Text>
            {movieState.description}
          </Text>
        </View>
    </View>
  )
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
  }
}
);

export default Movie;