import React, { useState, useMemo, useEffect } from 'react'
import { SafeAreaView, StyleSheet, TouchableHighlight, ImageBackground, Image, View, Text } from 'react-native'

import AppContextPro from './AppContextPro';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GstScreen from './GstScreen';
import { MyRadioButton } from './MyRadioButton';

const Stack = createNativeStackNavigator();

const radio = {
    first: {
        id: '1',
        label: ' English',
    },
    second: {
        id: '2',
        label: 'Hindi',

    }
}


export const HomeView = ({ navigation }) => {
    const [radioButton, setRadioButton] = useState(0)

    function onPress(number) {
        setRadioButton(number);

    }

    function nextScreen() {
        navigation.navigate('Gst',{lang: radioButton});
    }

    useEffect(() => {
        console.log(" tabvlue effect ");

    }, [radioButton])

    useMemo(() => {
        console.log(" tabvlue memo ");

    }, [radioButton])


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.containerIB} resizeMode="cover"
                source={require('../assets/bg.png')} >

                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/indian_gst_name.png')}
                />
                <View style={styles.containerView}>
                    <Text style={styles.textSty}> Choose Language </Text>

                    <View style={{ margin: 50, width: 230, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MyRadioButton onPress={onPress} type={1} title={radio.first.label} isSelected={radioButton} />
                        <MyRadioButton onPress={onPress} type={2} title={radio.second.label} isSelected={radioButton} />
                    </View>


                </View>

                <TouchableHighlight onPress={nextScreen}>
                    <Image
                        resizeMode='contain'
                        style={styles.nextBtnSty}
                        source={require('../assets/next_normal.png')} />
                </TouchableHighlight>

            </ImageBackground>

        </SafeAreaView>
    )

}
const HomeScreen = () => {

    return (
        <AppContextPro>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false }} />
                    <Stack.Screen name="Gst" component={GstScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContextPro>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue",

    },
    containerIB: {
        // flex : 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 290,
        height: 102,
        resizeMode: 'contain',
        marginTop: 100
        // position : 'absolute',
    },
    containerView: {
        width: 350,
        height: 200,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: 'center',
        marginTop: 20,

    },
    textSty: {
        fontSize: 25,
        color: 'black',
        marginTop: 10

    },
    radiogroupSty: {
        marginTop: 40,
    },
    radioSty: {

        borderColor: '#fff',
        borderWidth: 1.8,
        marginRight: 10,
        color: '#fff',
        marginTop: 20
    },
    nextBtnSty: {
        width: 200,
        height: 60,
        marginTop: 30
    },

})
