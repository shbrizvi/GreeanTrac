import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export const GstInput = ({title, gstValue = "", setGstValue = "", gst = ""}) => {
    console.log("title="+gst)
    return (
        <View style={styles.containerInput}>
            <Text Style={styles.textSty}>{gst.length === 0 ? title : title + "(" + gst + "%)"}</Text>

            <View
                style={styles.input}>
            <Text>{gstValue}</Text>
            </View>
        </View>
    )
}


export default function InputComponent({ title, gstValue = "", setGstValue = "", gst = "", isDisable = true }) {
    //   const [text, onChangeText] = React.useState("");
    const [holderText, setHolderText] = React.useState(displayText);

    function displayText() {
        return title.slice(title.indexOf(' ') + 1);

    }

    const handleChange = (value) => {
        setGstValue(value)
    }


    return (
        <View style={styles.containerInput}>
            <Text Style={styles.textSty}>{gst.length === 0 ? title : title + "(" + gst + "%)"}</Text>

            <TextInput
                placeholder={holderText}
                editable={isDisable}
                // keyboardType='numeric'
                maxLength={18}
                autoFocus={false}
                clearTextOnFocus={true}
                style={styles.input}
                onChangeText={handleChange}
                value={gstValue.toString()} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    textSty: {
        fontSize: 20,
        fontStyle: 'italic'
    },
    input: {
        width: 220,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'dodgerblue',
        borderRadius: 6,
    },

})
