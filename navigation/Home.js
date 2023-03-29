import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';




const onPress = (navigation, value) => {

  value === 'Next' ? navigation.navigate('Play') : navigation.goBack();

}
const Home = ({ navigation }) => {

  useEffect(() => {
    console.log("Home");
  }, [])

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}> This is Home Screen</Text>
      <View style={styles.btnContainer}>
        <TouchableHighlight onPress={() => onPress(navigation, "Prev")}  >

          <View
            style={styles.btn}
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}>
            <Text style={{ fontSize: 20 }}> Go to Prev Screen</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onPress(navigation, "Next")}>

          <View
            style={styles.btn}
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}>
            <Text style={{ fontSize: 20 }}> Go to Next Screen</Text>

          </View>
        </TouchableHighlight>

      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  btnContainer: {
    width: '100%',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  btn: {
    padding: 10,
    borderRadius: 8,
    color: 'red',
    backgroundColor: 'green'
  }


});
