import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';
export default function HealthCare() {
  return (
      <View style={{flex:1}}>
      <TransparentHeader title='Heath Care'/>
      <WebView source={{ uri: 'https://book-ambulance.communityhealth.ae' }} />
      </View>
  )
}