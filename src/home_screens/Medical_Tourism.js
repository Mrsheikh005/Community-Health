import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
export default class Medical_Tourism extends Component {
  render() {
    return (
        <WebView source={{ uri: 'https://communityhealth.ae/category/medical-tourism-v6lwy' }} 
        
        />
    )
  }
}