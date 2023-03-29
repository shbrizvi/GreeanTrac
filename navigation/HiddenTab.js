import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to About Stack"
                onPress={() => navigation.navigate('About')} />
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

function About({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>AboutScreen!</Text>
            <Button
                title="Go to Settings Stack"
                onPress={() => navigation.navigate('Settings')} />
        </View>
    );
}

function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feedback Screen!</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}

function Settings({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Screen!</Text>
            <Button
                title="Go to Home tab+Stack"
                onPress={() => navigation.navigate('Home')} />
        </View>
    );
}


function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={ { headerStyle: {
            backgroundColor: 'dodgerblue',

        },
        headerTintColor: '#000',
        headerTitleStyle: {

            fontWeight: 'bold',
            fontSize: 25
        },}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default function HiddenTab() {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ 
           headerShown : false
        }}>

            <Stack.Screen name="Home" component={HomeTabs}  />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Settings" component={Settings} />

        </Stack.Navigator>
    )
}