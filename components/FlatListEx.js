import React, { useState } from 'react'
import { SafeAreaView,TouchableOpacity, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d723',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d734',
        title: '4 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: '5 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: '6 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: '7 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d77',
        title: '8 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: '9 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d722',
        title: '10 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72345',
        title: '11 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d724',
        title: '12 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d755',
        title: '13 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d726',
        title: '14 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d727',
        title: '15 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7261',
        title: '16 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7272',
        title: '17 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d728',
        title: '18 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d729',
        title: '19 Item',
    },
    
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7222',
        title: '20 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7223',
        title: '21 Item',
    },

];



const Item = ({ item, onClick, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={()=>{onClick(item.id)}} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);


const FlatListEx = () => {

    const [clickItem, setClickItem] = useState(null)


    const renderItem = ({ item }) => {

        const backgroundColor = item.id === clickItem ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === clickItem ? 'white' : 'black';

        { item.id === clickItem ? console.warn("click " + item.title) : "" }

        return (
            <Item
                item={item}
                onClick={setClickItem}
                backgroundColor={ backgroundColor }
                textColor={{ color }}
            />
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={clickItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    bgNormal: {
        backgroundColor: 'red',
    }
});

export default FlatListEx;