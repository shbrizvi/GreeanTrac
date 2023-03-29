import { StyleSheet, Linking } from 'react-native';
import React, { useMemo, useState, useEffect } from 'react';
import { StackNavigatorEx } from './StackNavigatorEx'
import TabNavigateEx from './TabNavigateEx';
import HiddenTab from './HiddenTab'
import DrawerHome from './drawerNavi/DrawerHome';


//import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const NaviContainer = ({ navigation, route }) => {
    const { itemId } = route.params;

    const ScreenId = useMemo(() => {
        //   setScreenName(itemId)
        console.log("screen use memo");
        return itemId;
    }, [itemId])
      const url_splash = "calcapp://app/splash"
      const url_home = "calcapp://app/home"

      const url_play = "calcapp://app/play"
      const url_over = "calcapp://app/over"

       

    const SetScreen = () => {
        //    Alert.alert("clicked => " + itemId);
        console.log("navicontainer");
        switch (ScreenId) {
            case '1':
                Linking.openURL(url_splash)
                return;
               // return <StackNavigatorEx />
            case '2':
                Linking.openURL(url_home)
                return;
                //return <TabNavigateEx />;

            case '3':
                return <HiddenTab />;

            default:
                return <StackNavigatorEx />;
        }
    }

    return (

             <SetScreen />
     //     <StackNavigatorEx />
        // <DrawerHome />
        //  <TabNavigateEx  />


    )

};

export default NaviContainer;

const styles = StyleSheet.create({});
