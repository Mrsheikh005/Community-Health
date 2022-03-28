import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransparentHeader from '../../reuseables/TransparentHeader/TransparentHeader'
export default class Terms extends Component {
  render() {
    return (
        <View style={{flex:1}}>
           <TransparentHeader title='Terms & Conditions'/>
        <Text>Terms</Text>
      </View>
    )
  }
}