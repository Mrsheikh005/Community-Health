import React, { Component } from 'react'
import {Alert, ActivityIndicator } from 'react-native';
import { Colors, primaryColor } from './Styles';

export const renderLoadingView = () => {
    return (
        <ActivityIndicator color={primaryColor} size={"large"} />
    )
}
