import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity,Image} from 'react-native';
import { container, headings, primaryColor, Colors, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';

const myref = React.createRef();
export default class Login extends Component {
	state = {
		email: '',
		password: '',

		isSubmitting: false
	};

	toggleSecure = () => {
		myref.current.toggleSecure();
	};

	render() {
		const { isSubmitting } = this.state;
		return (
			<View style={container.empty}>
				<IconHeader
					onleftPress={() => { 
						this.props.navigation.goBack();
					}}
					// leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} style={{left:20, top:20}}/>}
				/>
				<ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
				
					<View style={{ alignItems: 'center', marginVertical: 5 }}>
					<Image source={require('../assets/images/Logo.png')} style={{marginVertical:'4%'}} />
						<Text style={{ ...headings.h1s, color: primaryColor }}>{languages.login}</Text>
					</View>

					<View>
						<InputField
							keyboardType="email-address"
							lable="Email"
							icon={<Fontisto name="email" size={20} color={Colors.gray} />}
							// onChange={(txt) => this.setState({ email: txt })}
						/>

						<InputField
							ref={myref}
							oniconPress={this.toggleSecure}
							isSecure={true}
							lable="Password"
							icon={<Entypo name="eye" size={20} color={Colors.gray} />}
							// onChange={(txt) => this.setState({ password: txt })}
						/>

						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate('ForgotPassword');
							}}
						>
							<Text style={{ ...headings.h7M, color: primaryColor, textAlign: 'center' }}>
								{languages.forgetpass}
							</Text>
						</TouchableOpacity>

						<View style={{ marginTop: 25 }}>
							<Btn1
								lableStyle={{ ...headings.h6M, color: white }}
								lable={languages.login}
								onPress={() => this.props.navigation.navigate('Home')}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
