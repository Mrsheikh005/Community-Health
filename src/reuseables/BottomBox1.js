import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements';
import languages from '../assets/languages/English.json'
import { primaryColor, Colors, headings, white } from '../../utils/Styles';
import Msg from '../assets/images/icons/msg.svg'
import Tile from '../reuseables/Tile'
import * as Animatable from 'react-native-animatable';
import Btn1 from './Btn1';
export default class BottomBox1 extends Component {
    componentDidUpdate() {
        console.log(this.props.isOrderStart + "  bottombix")
    }
    render() {
        const { containerStyle, btnLable, onPress, item, leftIcon, rightIcon } = this.props
        return (
            <Animatable.View animation="slideInUp" style={{ ...styles.container, ...containerStyle }}>
                <View style={styles.view1}>
                    {leftIcon}
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: 'space-between', paddingLeft: 10 }}>
                        <View>
                            <Text style={{ ...styles.t2, color: primaryColor }}>{languages.orderby}</Text>
                            <Text style={{ ...styles.t1, color: Colors.black, fontSize: 16 }}>{item['Order by']}</Text>
                        </View>
                        <View>{rightIcon}</View>
                    </View>
                </View>
                <View style={styles.view2}>
                    <FlatList
                        data={Object.entries(item)}
                        keyExtractor={(item, index) => {
                            return index
                        }}
                        renderItem={({ item }) => (
                            (item[0] == 'Order ID' || item[0] == "Order Destination" || item[0] == 'Distance' || item[0] == "Amount") ? < Animatable.View >
                                <Tile containerStyle={{ paddingVertical: 5, paddingHorizontal: 30 }} lable1={item[0]} lable2={item[1]} />
                            </Animatable.View> : null
                        )}
                    />
                </View>
                <Btn1 lable={btnLable} onPress={onPress} />
            </Animatable.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        justifyContent: 'space-around',
        backgroundColor: white,
    },
    t1: {
        color: primaryColor, ...headings.h7
    },
    t2: {
        ...headings.h8, color: Colors.darkgrey,
    },
    view1:
    {
        paddingVertical: 5,
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 0.3,
        borderBottomColor: Colors.darkgrey,
        alignItems: "center",
        justifyContent: 'space-between',
        marginHorizontal: 15

    },
    view2: {
        paddingVertical: 15,
        justifyContent: 'space-around'
    },
    list: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
    }

})