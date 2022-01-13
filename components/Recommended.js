import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image} from 'react-native';
import SearchBarComponent from "./SearchBarComponent";

const Recommended = ({navigation}) => {

    return (
      <View style={styles.container}>
               <SearchBarComponent navigation={navigation}></SearchBarComponent>

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

export default Recommended;