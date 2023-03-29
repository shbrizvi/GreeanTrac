import React, { useState, useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import InputComponent, { GstInput } from './InputComponent'
import DropDownList from './DropDownList';
import MyCheckBox from './MyCheckBox';
import { MyAppContext } from './AppContextPro';



const listNameEng = ["Gst Rate","Price Including GST", "GST", "Price Excluding GST"];
const listNameHindi = ["जीएसटी दर", "जीएसटी सहित मूल्य", "जीएसटी", "जीएसटी को छोड़कर कीमत"];



const GstScreen = ({ route, navigation }) => {

    const { spinValue, calcIncludeGst, calcExcludeGst, includeGst, excludeGst, gstRate, clearBtnClick } = useContext(MyAppContext);
    const { lang } = route.params;
    const langType = lang === 1 ? listNameEng : listNameHindi;
    console.log("type= " + langType[0]);

    return (
        <View style={{ flex: 1 }}>

            <ImageBackground style={styles.containerTop}
                source={require('../assets/bg.png')} >
                <Text style={styles.textSty}>Indian Gst Calculator</Text>
            </ImageBackground>

            <DropDownList title = {langType[0]}/>

            <View style={styles.checkboxContainer}>

                <MyCheckBox title={"CGST  (" + spinValue / 2 + "%)"} />
                <MyCheckBox title={"SGST  (" + spinValue / 2 + "%)"} />

            </View>
            <View style={{ marginTop: 20 }}>
                <InputComponent title={langType[1]} gstValue={includeGst} setGstValue={calcIncludeGst} />

                <GstInput title={langType[2]} gstValue={gstRate} gst={spinValue} />

                <InputComponent title={langType[3]} gstValue={excludeGst} setGstValue={calcExcludeGst} style={{ marginTop: 10 }} />
            </View>

            <TouchableOpacity style={{ alignItems: 'center' }} onPress={clearBtnClick}>
                <Image
                    resizeMode='contain'
                    style={styles.clearBtnSty}
                    source={require('../assets/clear_normal.png')} />
            </TouchableOpacity>

            <View style={styles.containerCopy}>

                <TouchableOpacity >
                    <Image
                        resizeMode='contain'
                        style={styles.copyBtnSty}
                        source={require('../assets/sharess.png')} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image
                        resizeMode='contain'
                        style={styles.copyBtnSty}
                        source={require('../assets/copyyy.png')} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image
                        resizeMode='contain'
                        style={styles.copyBtnSty}
                        source={require('../assets/screenshott.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GstScreen

const styles = StyleSheet.create({

    containerTop: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textSty: {
        fontSize: 25,
        color: 'white',
    },


    checkboxContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //      backgroundColor: 'dodgerblue',
    },

    clearBtnSty: {
        width: 200,
        height: 60,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerCopy: {
        marginTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    copyBtnSty: {
        width: 40,
        height: 44,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
})
