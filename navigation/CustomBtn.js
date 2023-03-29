import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';


const CustomBtn = (props) => {
    

    return (

        <TouchableHighlight onPress={() => props.onPress(props.ids)}>
            <View
                style={styles.btnView}>
                <Text style={{ fontSize: 20 }}> {props.title}</Text>
            </View>
        </TouchableHighlight>

    );
};

export default CustomBtn;

const styles = StyleSheet.create({

    btnView: {
        width: 250,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#DACC96',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'dodgerblue',
        borderWidth: 2
    }
});
