import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image} from 'react-native';

const Favorites = () => {

    return (
      <View style={styles.container}>
          <View style={styles.searchbar}>
      
          <TextInput style={styles.searchInput}>
          
          </TextInput>
          <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
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

export default Favorites;