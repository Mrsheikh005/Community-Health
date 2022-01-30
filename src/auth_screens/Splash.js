import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Splash extends Component {
	constructor(props) {
		super(props);
		setTimeout(() => {
			this.props.navigation.navigate('OnBoardingScreens');
		}, 2000);
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.item}>
					<Image source={require('../assets/images/VBA.png')} />
				</View>
			</View>
		);
	}
}
export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFCDFF'
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
