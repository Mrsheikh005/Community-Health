import React, { Component } from 'react'
import { Touchable, TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Colors, white, primaryColor, headings } from '../utils/Styles';
import OneText from './OneText';

export default class IconTile extends Component {
    render() {
        const { containerStyle, lable1, lable2, lable1Style, lable2Style, isBorder, icon, iconStyle, onPress } = this.props
        return (
            <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
                <Animatable.View animation="slideInUp" style={{ ...styles.list, borderBottomColor: !isBorder ? Colors.gray : null, ...containerStyle }}>
                    <Text style={{ ...styles.t1, ...lable1Style }}>{lable1}</Text>
                    <Text style={{ ...styles.t2, ...lable2Style }}>{lable2}</Text>
                    {icon}
                </Animatable.View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    t1: {
        ...headings.h6, color: Colors.black
    },
    t2: {
        ...headings.h6, color: primaryColor,
    },
    list: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: 0.2,
        paddingHorizontal: 30
    }
})