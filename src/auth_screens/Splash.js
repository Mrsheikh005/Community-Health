import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, StyleSheet, Image } from 'react-native';

class Splash extends Component {
	constructor(props) {
		super(props);
		
	}



async UNSAFE_componentWillMount (){
	try {
		const token = await AsyncStorage.getItem('@Session:Token')
		// const njsonValue = await JSON.parse(token);
		console.log(token)
		if(token){
			console.log('Yess Token')
			setTimeout(() => {
				this.props.navigation.replace('Home');
			}, 3000);
		}
		else{
			console.log('No Token')
			setTimeout(() => {
				this.props.navigation.replace('Login');
			}, 3000);
		}
		// setData(njsonValue)
		console.log('I have data')
		// console.log(njsonValue.name)
	  } catch (error) {
		// Error retrieving data
	  }


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
