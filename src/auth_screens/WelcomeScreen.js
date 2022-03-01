import React, { Component } from 'react';
import { ScrollView, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import { container, headings, primaryColor, textColor, white,secondryColor } from '../utils/Styles';
import InputField  from '../reuseables/InputField/index'
import IconHeader from '../reuseables/IconHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import languages from '../assets/languages/English.json';
import Tile from '../reuseables/Tile';

export default class  	WelcomeScreen extends Component {
	render() {
		return (
			<View style={container.empty}>
				<StatusBar backgroundColor={white} barStyle={'dark-content'} />

				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<View style={{ alignItems: 'center' }}>
							<Image source={require('../assets/images/Logo.png')} />
							<Text style={{ paddingTop: 25, ...headings.h7M }}>{languages.heygoodtoseeyou}</Text>
							<Text style={{ ...headings.h4, textAlign: 'center' }}>
								{languages.welcome} {languages.toapp}
							</Text>
							{/* <Image source={require('../assets/images/Welcome.png')} style={{ top: '1%' ,height:'40%',width:'40%'}} /> */}
						</View>

						<View>
							<Text style={{ ...headings.h5, textAlign: 'center' }}>{languages.letsCheck}</Text>

							<Text style={{ ...headings.h7, textAlign: 'center' }}>{languages.letscheckarea}</Text>

							<TouchableOpacity
								activeOpacity={0.9}
								onPress={() => {
									this.props.navigation.navigate('Congrats');
								}}
							>
								<InputField
									
								/>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
