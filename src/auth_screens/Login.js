import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { container, headings, primaryColor, Colors, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';
import PrefHandler from '../data/PrefHandler';
import Routes from '../remote/Routes';
import WebHandler from '../remote/WebHandler';

const myref = React.createRef();
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			isSubmitting: false
		};
	}

	toggleSecure = () => {
		myref.current.toggleSecure();
	};

	handleLogin = async () => {
		const { email, password } = this.state;

		if (email == '' || password == '') {
			alert('empty field not allowed');
			return;
		}
		this.setState({ isLoading: true });
		const webHandler = new WebHandler();

		// const bodyParams = { email:email, password: password }
		const bodyParams = new FormData();
		bodyParams.append('email', email);
		bodyParams.append('password', password);
		webHandler.sendGetDataRequest(
			Routes.LOGIN_USER,
			bodyParams,
			(resp) => {
				const prefs = new PrefHandler();
				prefs.createSession(resp.data, resp.token, (isCreated) => {
					if (isCreated) {
						console.log('Employee Data:', resp.data), console.log('Employee Token', resp.token);
						this.props.navigation.dispatch(StackActions.replace('Home'));
					} else {
						alert('something went wrong..');
					}
				});
			},
			(errorData) => {
				alert(errorData);
				this.setState({ isLoading: false });
			}
		);
	};

	render() {
		const { isSubmitting } = this.state;
		return (
			<SafeAreaView style={container.empty}>
				<IconHeader
					onleftPress={() => {
						this.props.navigation.goBack();
					}}
					// leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} style={{left:20, top:20}}/>}
				/>
				<ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View style={{ alignItems: 'center', marginVertical: 5 }}>
						<Image source={require('../assets/images/Logo.png')} style={{ marginVertical: '4%' }} />
						<Text style={{ ...headings.h1s, color: primaryColor }}>{languages.login}</Text>
					</View>

					<View>
						<InputField
							lable="Email Address"
							value={this.state.email}
							onChange={(txt) => this.setState({ email: txt })}
						/>
						<InputField
							lable="Password"
							value={this.state.password}
							onChange={(txt) => this.setState({ password: txt })}
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
								// onPress={() => this.props.navigation.replace('Home')}
								onPress={() => this.handleLogin()}
							/>
							<TouchableOpacity
								onPress={() => {
									this.props.navigation.navigate('SignUp');
								}}
							>
								<Text style={{ ...headings.h7M, color: primaryColor, textAlign: 'center' }}>
									{languages.register}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
