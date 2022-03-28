import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransparentHeader from '../../reuseables/TransparentHeader/TransparentHeader'
export default class OrderHistory extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <TransparentHeader title='Order History'/>
        <Text>OrderHistory</Text>
      </View>
    )
  }
}