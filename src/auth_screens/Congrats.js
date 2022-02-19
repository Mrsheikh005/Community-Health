import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import IconHeader from '../reuseables/IconHeader'
import Btn1 from '../reuseables/Btn1'
import OneText from '../reuseables/OneText'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { primaryColor, container, headings, white, secondryColor } from '../utils/Styles'
import languages from '../assets/languages/English.json'
import { InputField } from '../reuseables/InputField'

export default class Congrats extends Component {

    render() {
      
        return (
            <View style={container.empty}>

                <IconHeader onleftPress={() => { this.props.navigation.goBack() }} leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} style={{left:20, top:20}}/>}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ ...headings.h1s, textAlign: 'center', color: primaryColor }}>{languages.congratulation}</Text>
                        <Text style={{ ...headings.h7, textAlign: 'center' }}>{languages.wearegladtofindu}</Text>
                    </View>
                    <View>
                        <InputField textInputStyle={{ backgroundColor: white,   }} isEditable={false}
                            lable="Address"
                            containerStyle={{ elevation: 8, shadowColor: primaryColor, backgroundColor: white }}
                             icon={<Entypo size={25} name="location-pin" color={primaryColor} />}
                        />
                        <Btn1	lableStyle={{ ...headings.h6M, color: white }}
								lable={languages.login}
                            onPress={() => { this.props.navigation.navigate("Login") }}
                        />
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 20 }}>
                        <Text>--------------- Or -----------------</Text>
                        <Text style={{ ...headings.h6M, textAlign: 'center' }}>{languages.dontaccount}</Text>

                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => this.props.navigation.navigate("SignUp")}
                        >
                            <OneText lable1Style={headings.h6M} lable2Style={{ ...headings.h6M, color: primaryColor }}
                                lable1={languages.register} lable2={languages.now} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
