import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
export default class JobPortal extends Component {
  render() {
    return (
        <WebView source={{ uri: 'https://jobs.communityhealth.ae' }} />
    )
  }
}