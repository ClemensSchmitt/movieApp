import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Dashboard = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
<<<<<<< HEAD
          <TextInput style={styles.searchInput}>

          </TextInput>

=======
>>>>>>> aa660fccb6dd4b240095335bea6ac854d211d586
      </View>
      <View style={styles.buttonContainer}>
          <Pressable onPress = {() => navigation.navigate("MustWatchList")} title='MustWatchList' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Must Watch List</Text>
          </Pressable>
          <Pressable onPress = {() => navigation.navigate("PersonalRanking")} title='PersonalRanking' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Personal Ranking</Text>
          </Pressable>
      </View>
      <View style={styles.buttonContainer}>
          <Pressable onPress = {() => navigation.navigate("Favorites")} title='Favorites' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Favorites</Text>
          </Pressable>
          <Pressable onPress = {() => navigation.navigate("Top250")} title='Top 250' style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Top 250</Text>
          </Pressable>
      </View>
      <View style={styles.movies}>
      <View style={styles.recommendTextBoxStyle}>
        <Text onPress = {() => navigation.navigate("Popular")} title='Popular'  style={styles.buttonTextStyle}>Popular</Text>
      </View> 
      <View>
      </View>
      </View>
      <View style={styles.movies}>
      <View style={styles.recommendTextBoxStyle}>
        <Text onPress = {() => navigation.navigate("Recommended")} title='Recommended'  style={styles.buttonTextStyle}>Recommended</Text>
      </View> 
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
  search: {
    width: 120,
    
  },
    searchbar: {
    backgroundColor: '#6200EA',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
});

export default Dashboard;