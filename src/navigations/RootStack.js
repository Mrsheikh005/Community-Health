import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './Navigation';

export default class RootStack extends Component {
	render() {
		return (
			<NavigationContainer>
				<HomeStack />
			</NavigationContainer>
		);
	}
}
