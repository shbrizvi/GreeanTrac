import React from 'react';
import { Button, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';



const onPress = (value) => {
  //Alert.alert("clicked => "+value);
}
const Over = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Over Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <View style={{ margin: 5 }}>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Over', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
      <View style={{ margin: 5 }}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Splash')} />
      </View>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Over;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'gold',
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
