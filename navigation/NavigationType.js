import { StyleSheet, Text, View, StatusBar, Alert, Linking } from 'react-native';
import React, { useEffect } from 'react';
import CustomBtn from './CustomBtn';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigatorEx } from './StackNavigatorEx';
import NaviContainer from './NaviContainer';
import Splash from './Splash';


const Stack = createNativeStackNavigator();


function NavigationView({ navigation }) {

    useEffect(()=>{
     console.log("NavigationView")
    },[])

    const url_splash = "calcapp://app/splash"
    const url_home = "calcapp://app/home"

    const onPress = (value) => {
        Linking.openURL(url_home);
   //     Alert.alert("clicked => " + value);
       // navigation.navigate('Container',{itemId: value})
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.text}> Choose Navigation Type </Text>
            <CustomBtn ids='1' title="Stack Navigation" onPress={onPress} />
            <CustomBtn ids='2' title="Tab Navigation" onPress={onPress} />
            <CustomBtn ids='3' title="Stack in Tab " onPress={onPress} />
            <CustomBtn ids='4' title="Tab in Stack " onPress={onPress} />
            <CustomBtn ids='5' title="Drawer Navigation" onPress={onPress} />

        </View>
    );
}




const NavigationType = () => {

    const config = {
        screens : {
            Splash : "splash",
            NaviContainer : "home",
            Play : "play",
            Over : 'over',
          
        }
      }

    return (
        <NavigationContainer
        linking={
            {
                prefixes : ["calcapp://app",'com.calculatorapp'],
                config
            }
        }>
            <Stack.Navigator initialRouteName="View">
                <Stack.Screen name="View" component={NavigationView} options={{ headerShown: false }} />
                <Stack.Screen name="Container" component={NaviContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationType;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 25,
        color: '#4C0027',
    },


});
