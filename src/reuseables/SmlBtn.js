import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { primaryColor, headings } from '../utils/Styles'
export default class SmlBtn extends Component {
    //props=> onPress:<fun> ; lable:<String> ; btnStyle:<StyleObJ>;lableStyle:<StyleObj>
    render() {
        const { onPress, lable, lableStyle, btnStyle } = this.props
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View style={{ backgroundColor: '#D4FFF2', width: 100, borderRadius: 6, justifyContent: 'center', alignItems: 'center', paddingVertical: 2, ...btnStyle }}>
                    <Text style={{ ...headings.h7, color: primaryColor, ...lableStyle }}>{lable}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
