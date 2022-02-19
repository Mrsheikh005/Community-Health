import React, { Component } from 'react';
import { ScrollView, Text, View, Image, } from 'react-native';
import IconHeader from '../reuseables/IconHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { primaryColor, container, headings, Colors, white } from '../utils/Styles';
import languages from '../assets/languages/English.json';
import Btn1 from '../reuseables/Btn1';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { InputField } from '../reuseables/InputField';

export default class ForgotPassword extends Component {
	state = {
		email: '',
		isLoading: false
	};

	render() {
		const { isLoading } = this.state;
		return (
			<View style={container.empty}>
				<IconHeader
					containerStyle={{ elevation: 0 }}
					onleftPress={() => {
						this.props.navigation.goBack();
					}}
					leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} style={{ left: 20, top: 20 }}/>}
				/>
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
					<View style={{ paddingVertical: 20, alignItems: 'center' }}>
					<Image source={require('../assets/images/ForgotPass.png')} />
					</View>
					<View style={{ marginBottom: 15 }}>
						<InputField
							keyboardType="email-address"
							lable="Email"
							icon={<Fontisto name="email" size={20} color={Colors.gray} />}
							onChange={(txt) => this.setState({ email: txt })}
						/>

						{isLoading ? (
							renderLoadingView()
						) : (
							<Btn1
							lableStyle={{ ...headings.h6M, color: white }}
							lable={languages.getcode}
								onPress={() => this.props.navigation.navigate('OTPScreen')}
							/>
						)}
					</View>
				</ScrollView>
			</View>
		);
	}
}
