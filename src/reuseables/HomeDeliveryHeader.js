import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MySwitch from '../reuseables/MySwitch'
import Line from '../assets/images/icons/line.svg'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StatusBar, Text, View, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import { primaryColor, white, Colors, headings, secondryColor } from '../utils/Styles'
export default class HomeDeliveryHeader extends Component {
    render() {
        
        return (
            <Animatable.View animation="slideInDown" style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                        <FontAwesome name="bell" color={primaryColor} size={20} />
                    </TouchableOpacity>
                    <MySwitch />
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ marginTop: 5 }}>
                        <Line />
                    </View>
                    <View style={{ paddingLeft: 10, flexGrow: 1 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ ...styles.t1 }}>Hi</Text>
                            <Text style={{ ...headings.h4b, color: primaryColor }}>Marius,</Text>
                        </View>
                        <Text style={{ color: Colors.darkgrey, ...headings.h5 }}>Have a good day</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: Colors.gray, ...headings.h8, }}>You have schedule deliveries today</Text>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.t2}>View</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.gray} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animatable.View>
        )
    }
}
const styles = StyleSheet.create({
    t1: {
        paddingRight: 5, color: Colors.black, ...headings.h4
    },
    t2: {
        color: Colors.gray,
        ...headings.h8,
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: white,
        borderBottomEndRadius: 24,
        borderBottomLeftRadius: 24,
        elevation: 15,
    }
})