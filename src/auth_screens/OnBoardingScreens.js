import Onboarding from 'react-native-onboarding-swiper';
import { Text, View, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';

export default class OnBoardingScreens extends Component {
	render() {
		var { width } = Dimensions.get('window');
		const navigation = this.props.navigation;
		return (
			<View style={{ flex: 1 }}>
				<Onboarding
					bottomBarHighlight={false}
					onSkip={() => navigation.replace('WelcomeScreen')}
					onDone={() => navigation.replace('WelcomeScreen')}
					pages={[
						{
							backgroundColor: '#EFCDFF',
							image: (
								<Image
									source={require('../assets/images/Frame1.png')}
									style={{ marginTop: '10%', width: width * 0.9 }}
								/>
							),
							title: 'Stuck in a vehicle problem? We got you! Sit back, Relax & let us fix your vehicle.',
							subtitle: '',
							titleStyles: { fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' },
						},
						{
							backgroundColor: '#EFCDFF',
							image: (
								<Image
									source={require('../assets/images/Frame2.png')}
									style={{ marginTop: '10%', width: width * 0.9 }}
								/>
							),
							title: 'Contact us in case of any time, our professional team will assist you with best services.',
							subtitle: '',
							titleStyles: { fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' }
						},
						{
							backgroundColor: '#EFCDFF',
							image: (
								<Image
									source={require('../assets/images/Frame3.png')}
									style={{ marginTop: '10%', width: width * 0.9 }}
								/>
							),
							title: 'We provide solutions for you on the go...',
							subtitle: '',
							titleStyles: { fontSize: 18, fontWeight: 'bold', color: 'black', textAlign:'justify' },
                            
						}
					]}
				/>
			</View>
		);
	}
}
