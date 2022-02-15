import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { headings, Colors, primaryColor } from '../utils/Styles'
export default class OneText extends Component {
    render() {
        const { lable1, lable1Style, lable2, lable2Style, viewStyle } = this.props
        return (
            <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center', alignItems: "center", ...viewStyle }}>
                {/* <OneText/> */}
                <Text style={{ ...styles.t1, ...lable1Style }}>{lable1}</Text>
                <Text style={{ ...styles.t2, ...lable2Style }}>{lable2}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    t1: {
        paddingRight: 5, ...headings.sh6, color: primaryColor
    },
    t2: {
        ...headings.h4b
    },
})
