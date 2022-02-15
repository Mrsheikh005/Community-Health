import React, { Component } from 'react';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import { Colors, primaryColor } from '../utils/Styles';

export default class LoadingInd extends Component {
    render() {
        return (
            <SkypeIndicator size={45} color={primaryColor} />
        );
    }
}