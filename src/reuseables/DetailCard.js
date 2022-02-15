import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { primaryColor, Colors, headings, white } from '../utils/Styles'
import languages from '../assets/languages/English.json'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import SmlBtn from './SmlBtn'
export default class DetailCard extends Component {
    render() {
        const { order, onPress,containerStyle } = this.props
        return (
            <View style={{...styles.container,...containerStyle}}>
                <View style={{ justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 3 }} >
                        <Text style={styles.t2}>{languages.orderno}</Text>
                        <Text style={styles.t2}>{order['Order ID']}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 3 }}>
                        <Octicons name="primitive-dot" color={white} size={18} />
                        <Text style={{ ...styles.t2, paddingLeft: 12 }}>New York, st 1 west 21</Text>
                    </View>
                    <View style={{ margingRight: 10 }}>
                        <Entypo name="dots-three-vertical" color={white} size={10} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, }}>
                        <Octicons name="primitive-dot" color={white} size={13} />
                        <Text style={{ ...styles.t2, paddingLeft: 12 }}>{order['Order Destination']}</Text>
                    </View>

                </View>
                <View style={{ paddingBottom: 10, marginHorizontal: 20, borderTopWidth: 1, borderTopColor: 'white', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', justifyContent: 'space-between', paddingVertical: 6 }}>
                        <Text style={{ ...headings.h8, color: white }}>{languages.deliverydate}</Text>
                        <Text style={{ ...headings.h8, color: white }}>Today</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ ...headings.h8, color: white }}>{languages.deliverytime}</Text>
                        <Text style={{ ...headings.h8, color: white }}>06:00 PM</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <SmlBtn lable={languages.Details} onPress={onPress} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    t1: {
        paddingRight: 5, color: Colors.black, ...headings.h4
    },
    t2: {
        color: white,
        ...headings.h8,
    },
    container: {
        width: 250,
        marginHorizontal: 10,
        // height:'32%',
        borderRadius: 20,
        backgroundColor: primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 15
    }
})