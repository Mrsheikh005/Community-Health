import React, { Component } from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import { container, white, Colors, headings, primaryColor } from '../utils/Styles'
import Tile from './Tile'
import Packet from '../assets/images/icons/foodpacket.svg'
export default class OrdersCard extends Component {
    render() {
        const { item, onPress, islogo = true, lable1, lable2, lable3, lable4 } = this.props

        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>

                <View style={{ backgroundColor: white, borderRadius: 14, marginHorizontal: 15, elevation: 15, marginVertical: 15, paddingVertical: 15 }}>

                    {islogo ? <View style={{ position: 'absolute', right: 4, top: -15 }}><Packet /></View> : null}
                    <View style={{ borderLeftWidth: 2, borderLeftColor: primaryColor, paddingRight: 30, paddingLeft: 10 }}>

                        <Tile containerStyle={{ paddingVertical: 1 }} lable2Style={{ color: Colors.gray }} lable1={lable1} lable1Style={{ color: Colors.black }} lable2={item['Order ID']} />

                        <Tile containerStyle={{ paddingVertical: 1 }} lable1Style={{ color: Colors.black }} lable2Style={{ color: Colors.gray }} lable1={lable2} lable2={item['Order Destination']} />

                        <Tile containerStyle={{ paddingVertical: 1, borderBottomColor: primaryColor, paddingBottom: 5, }} lable1Style={{ color: Colors.black }} lable2Style={{ color: Colors.gray }} isBorder lable1={lable3} lable2={item['Restaurat Name']} />

                        <Tile containerStyle={{ paddingVertical: 1, paddingTop: 5, }} lable1Style={{ color: Colors.black }} lable2Style={{ color: Colors.gray, ...headings.h7M }} lable1={lable4} lable2={item['Total Amount']} />

                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}
