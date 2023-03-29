import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler,ToastAndroid, Alert } from "react-native";

const HandleBackEx = () => {

    const showToast = () => {
        ToastAndroid.show("Back Button Pressed !", ToastAndroid.SHORT);
      };
    

  const backAction = () => {
      {showToast()}
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Back button!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default HandleBackEx;
const styles = StyleSheet.create({
  style
})
