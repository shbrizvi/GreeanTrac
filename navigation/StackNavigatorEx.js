import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Splash'
import Home from './Home';
import Play from './Play';
import Over from './Over';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      resizeMode='contain'
      style={{ width: 50, height: 50 }}
      source={require('./indian_gst_name.png')}
    />
  );
}


export const StackNavigatorEx = () => {

  useEffect(()=>{
    console.log("StackNavigatorEx");
 },[])


  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',

        },
        headerTintColor: '#000',
        headerTitleStyle: {

          fontWeight: 'bold',
          fontSize: 25
        },
      }}>

        <Stack.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerShown: false
        }} />

        <Stack.Screen name="Splash" component={Splash}
          
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            ),
          }} />


        <Stack.Screen name="Play" component={Play}
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: 15
            },
          }} />
          
        <Stack.Screen name="Over" component={Over} options={{ title: 'Last Screen' }} />

        {/* <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
       */}
      </Stack.Navigator>
  );
};

