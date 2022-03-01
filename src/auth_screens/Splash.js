import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Splash extends Component {
	constructor(props) {
		super(props);
		setTimeout(() => {
			this.props.navigation.replace('Login');
		}, 5000);
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.item}>
					<Image source={require('../assets/images/Logo.png')} />
				</View>
			</View>
		);
	}
}
export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		
		
	}
});
