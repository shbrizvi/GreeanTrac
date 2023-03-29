import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'




export const MyRadioButton = (props) => {
    return (
        <TouchableHighlight onPress={() => props.onPress(props.type)}>
        <View style={styles.outerView}>

            <View style={styles.radioView}>
                {
                    props.isSelected === props.type ?
                        <View style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: '#000',
                        }} />
                        : null
                }
            </View>
            <Text style={styles.textSty}> {props.title}</Text>
        </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    outerView: {
        flexDirection: "row",
        alignContent : 'center',
       
    },
    radioView: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSty: {
        fontSize: 18,
        color: 'black',
    }

})