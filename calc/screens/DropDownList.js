import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { MyAppContext } from './AppContextPro';

const DropDownList = ({title = "Gst Rate"}) => {
    
    const { spinValue,  setSpinValue } = useContext(MyAppContext);

    const [open, setOpen] = useState(false);
  //  const [value, setValue] = useState('18%');
    const [items, setItems] = useState([
        { label: '3%', value: '3' },
        { label: '5%', value: '5' },
        { label: '8%', value: '8' },
        { label: '10%', value: '10' },
        { label: '12%', value: '12' },
        { label: '15%', value: '15' },
        { label: '16%', value: '16' },
        { label: '18%', value: '18' },
        { label: '28%', value: '28' },

    ]);



    // useEffect(()=>{
    //     console.warn("value" + value);
    //     setItems({label: '3%', value: '3' })
    // },[items])

    return (
        <View style ={styles.dropdownContainer}>

            <Text Style={styles.textSty}> {title} </Text>

            <DropDownPicker
                style={{
                    borderColor : 'dodgerblue'

                }}
                containerStyle={{
                    width: 250,
                    height: 50,
                }}
                
                autoScroll={true}
                open={open}
                value={spinValue}
                items={items}
                setOpen={setOpen}
                setValue={setSpinValue}
                setItems={setItems}
            />
        </View>
    )
}

export default DropDownList

const styles = StyleSheet.create({

    dropdownContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
 //       backgroundColor: 'dodgerblue',
    },
    textSty: {
        fontSize: 20,
        fontStyle: 'italic'
    
    },
})
