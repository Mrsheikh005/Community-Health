import React, { Component } from 'react'
import { Text, View, Switch } from 'react-native'
import { primaryColor, white, Colors } from '../utils/Styles';

export default class MySwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: false,
        }
    }
    toggleSwitch = () => {
        this.setState((prevState, prop) => {
            return { isEnabled: !prevState.isEnabled }
        })
    }
    render() {
        const { isEnabled } = this.state
        return (
            <View>
                <Switch
                    trackColor={{ false: Colors.gray, true: Colors.gray }}
                    thumbColor={isEnabled ? primaryColor : white}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.toggleSwitch}
                    value={isEnabled}
                />
            </View>
        )
    }
}
