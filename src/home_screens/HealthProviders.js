import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';
export default function HealthProviders() {
  return (
    <View style={{flex:1}}>
      <TransparentHeader title='Heath Providers UAE'/>
      <WebView source={{ uri: 'https://healthproviders.communityhealth.ae' }} />
      </View>
  )
}