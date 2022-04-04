import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { container, headings, primaryColor, Colors, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';
import PrefHandler from '../data/PrefHandler';
import { renderLoadingView } from '../utils/Helpers';
import { connect } from 'react-redux';
import ReducersActions from '../redux/actions';
import ReducersProps from '../redux/props';
// import PrefHandler from '../data/PrefHandler';
const myref = React.createRef();
class Login extends Component {
	state = {
		email: '',
		password: '',
		userToken: '',
		isLoading: false
	};
	LoginSubmit = () => {
		let pref = new PrefHandler();
		console.log(this.state.email);
		this.setState({ isLoading: true });
		fetch('https://pharmacy.shahjahanxd.xyz/api/user/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.status == true) {
					this.setState({ userToken: json.token });
					pref.createSession(this.state.email, this.state.userToken, json.status);
					this.props.navigation.replace('Home');
					// const data = performTimeConsumingTask();
				} else {
					alert('Login Failed');
					alert(json.status);
					this.setState({ isLoading: false });
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	toggleSecure = () => {
		myref.current.toggleSecure();
	};

	render() {
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
						<Text style={{ ...headings.h4b, color: primaryColor }}>{languages.login}</Text>
					</View>

					<View>
						<InputField
							onChange={(text) => {
								this.setState({ email: text });
							}}
							lable="Email Address"
						>
							{' '}
						</InputField>
						<InputField
							onChange={(text) => {
								this.setState({ password: text });
							}}
							isSecure={true}
							lable="Password"
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

						<View style={{ marginTop: 25, marginHorizontal: 30 }}>
							{this.state.isLoading ? (
								renderLoadingView()
							) : (
								<Btn1
									lableStyle={{ ...headings.h6M, color: white }}
									lable={languages.loginButton}
									onPress={this.LoginSubmit}
								/>
							)}

							<TouchableOpacity
								onPress={() => {
									this.props.navigation.navigate('SignUp');
								}}
							>
								<Text style={{ ...headings.h7M, color: primaryColor, textAlign: 'center', top: 15 }}>
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
export default connect(ReducersProps, ReducersActions)(Login);
