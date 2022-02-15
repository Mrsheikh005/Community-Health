import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import IconHeader from '../reuseables/IconHeader'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { primaryColor, container, headings, secondryColor } from '../utils/Styles'
import languages from '../assets/languages/English.json'
import Btn1 from '../reuseables/Btn1'
export default class NotAvailable extends Component {
    render() {
        return (
            <View style={container.empty}>

                <IconHeader containerStyle={{ elevation: 0 }} onleftPress={() => { this.props.navigation.goBack() }} leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} style={{left:20, top:20}} />}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', bottom: 20}}>

                    <View style={{ paddingVertical: 0 }}>
                        <Text style={{ ...headings.h5, textAlign: 'center' }}>{languages.unfortunately}</Text>

                        <Text style={{ ...headings.h7, textAlign: 'center' }}>{languages.wearenotinarea}</Text>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <Image source={require('../assets/images/NotAvailable.png')}/>
                    </View>

                    <Btn1 lableStyle={{ color: secondryColor }} containerStyle={{ paddingHorizontal: 30 }}
                        lable={languages.tryaontherlocation}
                        onPress={() => this.props.navigation.navigate('WelcomeScreen')}
                    />
                </ScrollView>

            </View>
        )
    }
}
