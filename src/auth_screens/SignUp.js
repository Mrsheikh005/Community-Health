import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { container, headings, primaryColor, Colors, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';
import Mycheckbox from '../reuseables/Mycheckbox';
import PrefHandler from '../data/PrefHandler';
import Routes from '../remote/Routes';
import WebHandler from '../remote/WebHandler';
const myref = React.createRef();
const myref1 = React.createRef();

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',

			isSubmitting: false,
			isPolicyChecked: false
		};
	}

	toggleSecure = (ref) => {
		ref.current.toggleSecure();
	};

	handleSignup = async () => {
		const { name, email, password, confirmPassword } = this.state;

		if (name == '' || email == '' || password == '' || confirmPassword == '') {
			alert('empty field not allowed');
			return;
		}
		this.setState({ isLoading: true });
		const webHandler = new WebHandler();

		// const bodyParams = { email:email, password: password }
		const bodyParams = new FormData();
		bodyParams.append('name', name);
		bodyParams.append('email', email);
		bodyParams.append('password', password);
		bodyParams.append('confirmPassword', confirmPassword);
		webHandler.sendPostDataRequest(
			Routes.REGISTER_USER,
			bodyParams,
			(resp) => {
				const prefs = new PrefHandler();
				prefs.createSession(resp.data, resp.token, (isCreated) => {
					if (isCreated) {
						console.log('Employee Data:', resp.data), console.log('Employee Token', resp.token);
						this.props.navigation.navigate('ForgotPassword');
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
		const { isSubmitting, isPolicyChecked } = this.state;
		return (
			<View style={container.empty}>
				<IconHeader
					onleftPress={() => {
						this.props.navigation.goBack();
					}}
					leftBtn={
						<AntDesign size={25} name="arrowleft" color={primaryColor} style={{ left: 20, top: 20 }} />
					}
				/>
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
					<View style={{ alignItems: 'center', marginVertical: 5 }}>
						<Text style={{ ...headings.h1s, color: primaryColor }}>{languages.register}</Text>
					</View>

					<View>
						<InputField
							lable={languages.name}
							icon={<Feather name="user" size={20} color={Colors.gray} />}
							value={this.state.name}
							onChange={(txt) => {
								this.setState({ name: txt });
							}}
						/>
						<InputField
							lable={languages.email}
							keyboardType="email-address"
							icon={<Feather name="user" size={20} color={Colors.gray} />}
							value={this.state.email}
							onChange={(txt) => {
								this.setState({ email: txt });
							}}
						/>

						<InputField
							keyboardType="email-address"
							lable="Password"
							icon={<Fontisto name="email" size={20} color={Colors.gray} />}
							value={this.state.password}
							onChange={(txt) => {
								this.setState({ password: txt });
							}}
						/>

						{/* <InputField keyboardType="phone-pad" ref={myref} oniconPress={this.toggleSecure} lable="Phone Number" icon={<AntDesign name="phone" size={20} color={Colors.gray} />} /> */}

						<InputField
							ref={myref1}
							oniconPress={() => this.toggleSecure(myref1)}
							isSecure={true}
							lable="Confirm Password"
							icon={<Feather name="lock" size={20} color={Colors.gray} />}
							value={this.state.confirmPassword}
							onChange={(txt) => {
								this.setState({ confirmPassword: txt });
							}}
						/>

						{/* <InputField
							isSecure={true}
							ref={myref}
							oniconPress={() => this.toggleSecure(myref)}
							isSecure={true}
							lable="Confirm Password"
							icon={<Feather name="lock" size={20} color={Colors.gray} />}
							onChange={(txt) => {
								this.setState({ confirmPassword: txt });
							}}
						/> */}

						<View style={{ marginHorizontal: 35 }}>
							<Mycheckbox
								onPress={(val) => {
									this.setState({ isPolicyChecked: !isPolicyChecked });
								}}
								text={languages.iagreeterms}
							/>
						</View>

						<View style={{ marginBottom: 20, marginTop: 30 }}>
							<Btn1
								lableStyle={{ ...headings.h6M, color: white }}
								lable={languages.register}
								onPress={() => this.handleSignup()}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
