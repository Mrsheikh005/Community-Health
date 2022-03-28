import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';
export default class JobPortal extends Component {
  render() {
    return (
        <WebView source={{ uri: 'https://jobs.communityhealth.ae' }} />
    )
  }
}