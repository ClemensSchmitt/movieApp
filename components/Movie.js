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
      var reference = ref(firebase.db, 'users/userData/' + state.email.replace("." , "--DOT--") + '/favorites/' + movieId);
      set(reference, {
        title: movieState.title,
      });
    }
    else{
      Alert.alert("Database connection error");
    }
  }

  const addToWatchList = () => {
    if(firebase.db != null){
      var reference = ref(firebase.db, 'users/userData/' + state.email.replace("." , "--DOT--") + '/watchlist/' + movieId);
      set(reference, {
        title: movieState.title,
      });
    }
    else{
      Alert.alert("Database connection error");
    }
    //Wenn man den Key braucht muss man folgendes machen.
    /*get(child(ref(firebase.db), 'users/userData/' + state.email.replace(".", "--DOT--") + '/watchlist/' + movieId))
    .then((snapshot) => {
      if(snapshot.exists()){          
        Alert.alert(snapshot.key.toString());
      }
    })
    */
  }


  return (
    <View style={styles.container}>

        <SearchBarComponent navigation={props.navigation}></SearchBarComponent>

        <View style={styles.headerBar}>
            <Text style={styles.headerText}>
                {movieState.title}
            </Text>
            <View style={styles.buttonContainer}> 
                <Pressable onPress = {() => addToWatchList()}>
                <Image source={require('../assets/plus_unchecked.png')} style={styles.icon}/>
                </Pressable>
                <Pressable onPress = {() => addToFavorites()}>
                <Image source={require('../assets/favorite_unchecked.png')} style={styles.icon}/>
                </Pressable>    
            </View>
        </View>

        <ScrollView contentContainerStyle={styles.contentMovieContainer} style={styles.contentMovie}>
            <View style= {styles.imageContainer}>
                <Image source={{uri: IMAGE_API + movieState.posterPath}} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 8,
                }}/>
            </View>
            
            <View style= {styles.descriptionContainer} >

                <Text style= {styles.descriptionTitle} >
                   Description:
                </Text>

                <Text style= {styles.description} >
                   {movieState.description}
                   
                </Text>
                
            </View>
            <View style={styles.spacer}>

            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    backgroundColor: '#fff',
  },
  headerBar:{
    padding: '1%',
    margin: '2%',
    backgroundColor: '#6200EA',
    borderRadius: 8,
    opacity: 50,
    flexDirection: "row",
    justifyContent: "space-between",
},
headerText:{
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 30,
    maxWidth:'75%',
    
    textShadowColor: '#000000',
    textShadowRadius: 10,
},
buttonContainer:{
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  maxHeight: 35,

},
icon:{
  maxWidth: 25,
  maxHeight: 25,
  marginHorizontal: 5,
},

contentMovieContainer:{
  
  

},
contentMovie:{
  marginHorizontal: '2%',
 

 



},

imageContainer:{
  borderRadius: 8,

  height: 550,

},
descriptionTitle:{
  fontSize: 25,
  marginVertical:5,
  marginHorizontal: 10,
  color: "#fff",


},
description:{
  //marginTop:5,
  marginBottom:10,
  marginHorizontal: 10,
  textAlign: "justify",
  color: "#fff",

},
descriptionContainer:{
  backgroundColor: "#000",
  borderRadius: 8,
  marginTop:10,
  
},
spacer:{
  height: 200,

}



 
}
);

export default Movie;