import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors, white, primaryColor, headings } from '../utils/Styles';
import OneText from './OneText';

export default class Tile extends Component {
    render() {
        const { containerStyle, lable1, lable2, lable1Style, lable2Style, isBorder, } = this.props
        return (
            <View style={{ ...styles.list, borderBottomWidth: isBorder ? 0.2 : 0, borderBottomColor: Colors.gray, ...containerStyle }}>
                <Text style={{ ...styles.t1, ...lable1Style }}>{lable1}</Text>
                <Text style={{ ...styles.t2, ...lable2Style }}>{lable2}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    t1: {
        color: primaryColor, ...headings.h7
    },
    t2: {
        ...headings.h8, color: Colors.darkgrey,
    },
    list: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: "space-between",

    }
})