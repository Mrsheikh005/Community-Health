import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import { headings, primaryColor, white, Colors } from '../utils/Styles'
import * as Animatable from 'react-native-animatable';
import Line from '../assets/images/icons/line.svg'
import languages from '../assets/languages/English.json'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DetailCard from './DetailCard'
import { Orders } from '../data/OrderData'
export default class BottomBox extends Component {
    handleViewAll = () => {
        this.props.navigation.navigate('ViewAllOrders',{item:Orders})
    }
    render() {
        return (
            <Animatable.View animation="slideInUp" style={styles.container}>
                <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Line />
                            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                                <Text style={styles.t1}>{languages.Your}</Text>
                                <Text style={{ ...headings.h4b, color: primaryColor }}>{languages.Deliveries}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this.handleViewAll}>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                            }}>
                                <Text style={styles.t2}>View All</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.gray} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        data={Orders}
                        keyExtractor={(item, index) => {
                            return index;
                        }}
                        renderItem={({ item }) => (
                            <Animatable.View
                                animation="slideInLeft">
                                <DetailCard order={item} onPress={() => { this.props.navigation.navigate('OrderDetails', { item: item }) }} />
                            </Animatable.View>
                        )
                        }
                    />
                </View>
            </Animatable.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 10,
        elevation: 15,

    },
    t1: {
        paddingRight: 5, color: Colors.black, ...headings.h4
    },
    t2: {
        color: Colors.gray,
        ...headings.h8,
    },
})