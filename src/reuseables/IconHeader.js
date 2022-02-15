import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { headings, primaryColor, Colors, white } from '../utils/Styles'
import OneText from './OneText'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class IconHeader extends Component {
    //props=> containerStyle:<styleObj>, innerviewStyle:<styleObj>, leftBtn:<child>, onleftPress:<fun>,rightBtn:<child>, onRightPress:<fun>, lable1:<String>, lable2:<String>, lable1Style::<styleObj>, lable2Style:<styleObj>
    render() {
        const { containerStyle, innerviewStyle, leftBtn, rightBtn, onleftPress,
            onRightPress, lable1, lable2, lable1Style, lable2Style, centerChild,
            innerViewBG
        } = this.props
        return (
            <View style={{ ...styles.container, ...containerStyle }}>
                <View style={{ ...styles.innerView, ...innerViewBG }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={onleftPress}>{leftBtn}</TouchableOpacity>
                    {centerChild ? centerChild : <OneText lable1={lable1} lable2={lable2} lable1Style={lable1Style} lable2Style={lable2Style} viewStyle={innerviewStyle} />}
                    <TouchableOpacity activeOpacity={0.8} onPress={onRightPress}>{rightBtn}</TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
      
    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    t1: {
        paddingRight: 5, color: Colors.black, ...headings.h4
    },
    t2: {
        ...headings.h4b, color: primaryColor,
    },
})