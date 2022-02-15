import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'brown'
        }
    }
    componentDidUpdate() {
        console.log('update')
    } render() {
        return (
            <View>
                <Text onPress={() => { this.setState({ color: 'white' }) }}> textInComponent </Text>
                <Text style={{ color: "green" }}>{this.state.color}</Text>
            </View>
        )
    }
}
