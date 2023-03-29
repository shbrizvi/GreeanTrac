import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';



const onPress = (navigation, value) => {
  //Alert.alert("clicked => "+value);
  console.log("val == " + value);
  
  value==='Next'? navigation.navigate('Home'):navigation.goBack();

  // push intent to add another route regardless of the existing navigation history.
 // navigation.push('Splash'); //if want to redirect on same screen again

//  if you are several screens deep in a stack and want to dismiss all of them 
//  to go back to the first screen then to go back to Home so we can use navigate('Home')
//  (not push! try that out and see the difference). 
//  Another alternative would be navigation.popToTop(), 
//  which goes back to the first screen in the stack.

}



const Splash = ({ navigation }) => {

  useEffect(()=>{
    console.log("Splash");
 },[])


  return (
    <View style={styles.container}>
      <Text style={styles.text}> This is Splash Screen</Text>
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

export default Splash;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'yellow',
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
