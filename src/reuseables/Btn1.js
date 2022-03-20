import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, headings, primaryColor, white } from '../utils/Styles'

// props=> containerStyle:<styleObject>, lable:<String>, lableStyle:<styleObject>, onPress:<fun>

export default class Btn1 extends Component {
    render() {
        const { containerStyle, lable, lableStyle, onPress } = this.props
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{marginVertical:10}}>
                <View style={{ ...styles.container, ...containerStyle }}>
                    <Text style={{ color: white, ...headings.h4, ...lableStyle }}>{lable}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 30,
        borderRadius: 8
    }
})