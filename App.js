import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
      
      </View>
      <View style={styles.buttons}>
          <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.buttonTextStyle}>Must Watch List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.buttonTextStyle}>Personal Ranking</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
          <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.buttonTextStyle}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.buttonTextStyle}>Top 250</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.movies}>
      <View>
        <Text>Popular</Text>
      </View> 
      <View>

      </View>
      </View>
      <View style={styles.movies}>
      <View>
        <Text>Recommended</Text>
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
  buttons: {
    top: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10, 
    maxHeight: 80,
    justifyContent: 'space-between',
  },
  touchableOpacity: {
    backgroundColor: '#6200EA',
    width: 150,
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  buttonTextStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
    top: 15,
    textShadowColor: '#000000',
    textShadowRadius: 10,
  },
    searchbar: {
    backgroundColor: '#6200EA',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  movies:{
    height: 180,
    width: 300,
    backgroundColor: '#6200EA',
    alignSelf: 'center',
    top: 20,
    borderRadius: 8,
    marginTop: 10,
  }
});
