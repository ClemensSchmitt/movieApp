import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image, ScrollView, Pressable} from 'react-native';
import { getFirestore, collection, getDocs, snapshotEqual } from 'firebase/firestore/lite';
import { getDatabase, ref, child, onValue, push} from "firebase/database";
import { get, set } from "firebase/database";
import firebase from "../firebase";
import state from "./Session";
import {proxy, useSnapshot} from "valtio";
import Favorites from "./Favorites";
import SearchBarComponent from "./SearchBarComponent";

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

  const addToFavorites = () => {
    if(firebase.db != null){
      const db = getDatabase();
      var reference = ref(firebase.db, 'users/userData/' + state.id + '/favorites');
      const childRef = push(reference);
      set(childRef, {movieId});
    }
    else{
      Alert.alert("Database connection error");
    }
  }

  const addToWatchList = () => {
    if(firebase.db != null){
      const db = getDatabase();
      var reference = ref(firebase.db, 'users/userData/' + state.id + '/watchlist');
      const childRef = push(reference);
      set(childRef, {movieId});
    }
    else{
      Alert.alert("Database connection error");
    }
  }


  return (
    <View style={styles.container}>
        <SearchBarComponent navigation={props.navigation}></SearchBarComponent>
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
 
}
);

export default Movie;