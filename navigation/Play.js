import React from 'react';
import { Button, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';



const onPress = (navigation, value) => {
 //  Alert.alert("clicked => "+value);
  switch (value) {
    case 1:
      navigation.navigate('Home');
      break;
    case 2:
      navigation.navigate('Over',{itemId: 86,
        otherParam: 'anything you want here',});
      break;
    case 3:
      navigation.popToTop();
      break;
    case 4:
      navigation.goBack();
      break;
      case 5:
      navigation.navigate('Splash');
      break;
    default:
      navigation.push('Play');

  }
}
const Play = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> This is Play Screen</Text>

      <View style={styles.btnContainer}>
        <TouchableHighlight onPress={() => onPress(navigation, 1)}  >
          <View
            style={styles.btn}>
            <Text style={{ fontSize: 20 }}> Prev Screen</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => onPress(navigation, 2)}>
          <View
            style={styles.btn}>
            <Text style={{ fontSize: 20 }}> Next Screen</Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => onPress(navigation, 3)}  >
          <View
            style={styles.btn}>
            <Text style={{ fontSize: 20 }}>  popToTop</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => onPress(navigation, 4)}>
          <View
            style={styles.btn}>
            <Text style={{ fontSize: 20 }}> Go Back</Text>

          </View>
        </TouchableHighlight>

          <TouchableHighlight onPress={()=>onPress(navigation,5)}  >

          <View
            style={styles.btn}>
            <Text style={{ fontSize: 20 }}> Navigate to Splash</Text>
          </View>
        </TouchableHighlight> 
        <TouchableHighlight onPress={()=>onPress(navigation,6)}>

          <View
            style={styles.btn}>
            <Text style={{ fontSize: 20 }}> Again LAunch</Text>

          </View>
        </TouchableHighlight> 

      </View>

    </View>
  );
};

export default Play;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'red',
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
    flexWrap: 'wrap',
    alignContent: 'center'

  },
  btn: {
    width: 180,
    padding: 10,
    borderRadius: 8,
    color: 'red',
    backgroundColor: 'green',
    margin: 2
  }


});
