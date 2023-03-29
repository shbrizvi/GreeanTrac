import React, {useState} from 'react';
import {

  Text,
   Image,
   Switch,
  View,
  ImageBackground,
  Button,
  StyleSheet,
} from 'react-native';



const Separator= () => (
    <View style={styles.separator} />
  );
  

export default function TestFile() {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const Btn = (props)=> (
    <View>      
      <Button title = {props.title} />
        <Button disabled title = {props.title} />
        </View>
  )  
  
    return (
        <View style = {{flex : 1}}>
        {/* <ImageBackground style = {{flex :1}} resizeMode="contain"
                source = {require('./drawable/bg.png')} > */}
        <View
          style={{
            flexDirection: "column",
            height: 400,
            padding: 20
          }}
        >
          <View style={{ backgroundColor: "blue", flex: 3 }} />
          <View style={{ backgroundColor: "red", flex:  5 }} />
          <Text style = {{flex : 3, fontSize : 40, color : 'white',backgroundColor : 'black'}}>Hello My World!</Text>
        </View>
        <Switch
            style = {{ backgroundColor : 'green'}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Separator />
          <Btn title = "PressMe"/>
          <Separator />
        {/* </ImageBackground> */}
        </View>
     
    )
}

const styles = StyleSheet.create({
    separator: {
      marginVertical: 18,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  })
  
  