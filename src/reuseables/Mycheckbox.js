import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { headings, primaryColor } from '../utils/Styles';

export default class Mycheckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
    }
    toggleCheck = () => {
        this.setState((prev, prop) => {
            return { isChecked: !prev.isChecked }
        },()=>this.props.onPress(this.state.isChecked))
    }
    render() {
        return (
            <View>
                <BouncyCheckbox

                    ref={this.props.myref}
                    isChecked={this.state.isChecked}
                    size={22}
                    fillColor={primaryColor}
                    unfillColor="#FFFFFF"
                    text={this.props.text}
                    iconStyle={{ borderColor: primaryColor, borderRadius: 2, borderWidth: 2, width: 18, height: 18 }}
                    disableBuiltInState
                    textStyle={{
                       
                        textAlign:'justify',
                        right:8,
                   
                        ...headings.h8M
                    }}
                
                    onPress={this.toggleCheck}
                />
            </View>
        )
    }
}
