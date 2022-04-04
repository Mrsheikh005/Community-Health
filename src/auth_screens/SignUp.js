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
import { renderLoadingView } from '../utils/Helpers';
import { connect } from 'react-redux';
import ReducersActions from '../redux/actions';
import ReducersProps from '../redux/props';
const myref = React.createRef();
const myref1 = React.createRef();

class Registration extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		userToken: '',
		isLoading: false,
		isPolicyChecked: false
	};
	SignUpSubmit = () => {
		this.setState({ isLoading: true });
		fetch('https://pharmacy.shahjahanxd.xyz/api/user/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				password_confirmation: this.state.confirmPassword
			})
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.status == true) {
					this.props.navigation.navigate('Login');

					// const data = performTimeConsumingTask();
				} else {
					alert('SignUp Failed');
					console.log(json.errors.name);
					console.log(json.errors.email);
					console.log(json.errors.password);
					this.setState({ isLoading: false });
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	toggleSecure = (ref) => {
		ref.current.toggleSecure();
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
							keyboardType="email-address"
							lable="Email"
							icon={<Fontisto name="email" size={20} color={Colors.gray} />}
							value={this.state.email}
							onChange={(txt) => {
								this.setState({ email: txt });
							}}
						/>

						<InputField
							keyboardType="email-address"
							lable="Password"
							icon={<Feather name="lock" size={20} color={Colors.gray} />}
							value={this.state.password}
							onChange={(txt) => {
								this.setState({ password: txt });
							}}
						/>

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

						<View style={{ marginHorizontal: 35 }}>
							<Mycheckbox
								onPress={(val) => {
									this.setState({ isPolicyChecked: !isPolicyChecked });
								}}
								text={languages.iagreeterms}
							/>
						</View>

						<View style={{ marginBottom: 20, marginTop: 30, marginHorizontal: 30 }}>
							{this.state.isLoading ? (
								renderLoadingView()
							) : (
								<Btn1
									lableStyle={{ ...headings.h6M, color: white }}
									lable={languages.register}
									onPress={this.SignUpSubmit}
								/>
							)}
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
export default connect(ReducersProps, ReducersActions)(Registration);
