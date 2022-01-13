import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {proxy, useSnapshot} from "valtio";
import state from "./Session";


const Dashboard = ({navigation}) => {

  //This is how to use the global Session
  const snap = useSnapshot(state);  

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
          <TextInput style={styles.searchInput}>
          </TextInput>
          <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
      </View>
      <View style={styles.buttonContainer}>
          <Pressable onPress = {() => navigation.navigate("MustWatchList")} title='MustWatchList' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Must Watch List</Text>
          </Pressable>
          <Pressable onPress = {() => navigation.navigate("Top20")} title='Top20' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Top 20</Text>
          </Pressable>
      </View>
      <View style={styles.buttonContainer}>
          <Pressable onPress = {() => navigation.navigate("Profile")} title='Profile' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Profile</Text>
          </Pressable>
          <Pressable onPress = {() => navigation.navigate("Popular")} title='Popular' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Popular</Text>
          </Pressable>
      
      
      </View>
      <View style={styles.movies}>
      <Pressable onPress = {() => navigation.navigate("Popular")} title='Popular' style={styles.recommendTextBoxStyle}>
        <Text style={styles.buttonTextStyle}>Popular</Text>
      </Pressable> 
      <View>
      </View>
      </View>
      <View style={styles.movies}>
      <Pressable onPress = {() => navigation.navigate("Recommended")} title='Recommended' style={styles.recommendTextBoxStyle}>
        <Text style={styles.buttonTextStyle}>Recommended</Text>
      </Pressable> 
      <View>

      </View>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    top: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10, 
    maxHeight: 80,
    justifyContent: 'space-around',
  },

  buttonStyle: {
    backgroundColor: '#6200EA',
    height: 50,
    width: 120,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 12,
  },
  buttonTextStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
    top: 15,
    textShadowColor: '#000000',
    textShadowRadius: 10,
  },
  movies: {
    height: 180,
    width: 300,
    backgroundColor: '#6200EA',
    alignSelf: 'center',
    top: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  recommendTextStyle: {
    justifyContent:'center',
  },
  recommendTextBoxStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 20,
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
});

export default Dashboard;