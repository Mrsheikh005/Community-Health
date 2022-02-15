import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { primaryColor, Colors, headings, white, } from '../utils/Styles'
import { Avatar } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class NotificationTile extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, marginHorizontal: 20, backgroundColor: white }}>
                <View style={{paddingHorizontal:5,flexDirection: 'row', alignItems: 'center' }}>

                    <Avatar size={'small'} source={require('../../assets/images/icons/man.png')} rounded />
                    <View style={{ width: '70%', paddingLeft: 10 }}>
                        <Text style={{ ...headings.h8, color: Colors.gray }}>yesterday</Text>
                        <Text numberOfLines={2} style={{ ...headings.h7M, color: Colors.darkgrey, overflow: 'scroll', lineHeight: 17 }}>You received 4.9 rating
                            from Olsen Ols</Text>

                    </View>
                </View>
                <View >
                    <MaterialIcons size={30} name="keyboard-arrow-right" color={primaryColor} />
                </View>
            </View>
        )
    }
}
