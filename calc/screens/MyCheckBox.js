import React ,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CheckBox from '@react-native-community/checkbox';

export default function MyCheckBox({title}) {
    const [isSelected, setSelection] = useState(false)

    return (
        <View style = {{flexDirection :'row'}}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.label} > {title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "center",
    },
    label : {
        marginRight : 20,
        alignSelf : 'center',

    },
})
