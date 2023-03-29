import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigatorEx } from './StackNavigatorEx';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function AboutScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>AboutScreen!</Text>
      </View>
    );
  }

  function FeedbackScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feedback Screen!</Text>
        <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')} />
      </View>
    );
  }
  
  
const Tab = createBottomTabNavigator();

export default function TabNavigateEx() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;
        
    // if (route.name === 'Home') {
    //     iconName = focused
    //       ? 'ios-information-circle'
    //       : 'ios-information-circle-outline';
    //   } else if (route.name === 'Settings') {
    //     iconName = focused ? 'ios-list-box' : 'ios-list';
    //   }

    //    // You can return any component that you like here!
    //    return <Ionicons name={iconName} size={size} color={color} />;
    //   },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}
  >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown : false}} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="About" component={StackNavigatorEx} options={{headerShown:false}}  />

        <Tab.Screen name="Feedback" component={FeedbackScreen} />

      </Tab.Navigator>
  );
}