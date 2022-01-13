import {React, useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image, ScrollView} from 'react-native';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const FEATURED_API = "https://api.themoviedb.org/3/movie/XXXXXXX?api_key=debe76e8c00bc3a787ba451864f37299";

const Movie = () => {

  const {movieId} = this.props.route.params;

  const [movieState, setMovieState] = useState({
    title: "",
    posterPath: "",
    genres: "",    
    description: "",
  });

  useEffect(() => {
    var dataPath = FEATURED_API.replace("XXXXXXX", movieId.toString());
    fetch(dataPath)
    .then((res) => res.json())
    .then((data)=> {
      setMovieState({...localState, ["title"]: data.original_title});
      setMovieState({...localState, ["posterPath"]: data.original_title});
      setMovieState({...localState, ["genres"]: data.original_title});
      setMovieState({...localState, ["description"]: data.original_title});
    })
    .catch((error) => {
        console.error(error);
    })
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.searchbar}>
          <TextInput style={styles.searchInput}>
          
          </TextInput>
          <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
        </View>

        <View>
          <Text>
            {movieState.title}
          </Text>
          <Text>
            {movieState.genres}
          </Text>
          <View>

          </View>
          <Image source={{uri: IMAGE_API + posterPath}} style={{
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