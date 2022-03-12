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
	state = {
		email: '',
		password: '',
		userToken: '',
		isSubmitting: false
	};
	LoginSubmit =() =>{
		console.log(this.state.email)
		fetch('https://pharmacy.shahjahanxd.xyz/api/user/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: this.state.email,
    password: this.state.password
  })})
  .then((response) => response.json())
    .then((json) => {
		
		if(json.status == true){
			this.setState({userToken: json.token})
			this.props.navigation.replace('Home')
			// const data = performTimeConsumingTask();
		  }else{
			alert('Login Failed')
			alert(json.status)
			
		  }
    })
	.catch((error) => {
		console.error(error);
	  });


	}

	toggleSecure = () => {
		myref.current.toggleSecure();
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

						<InputField onChange={(text) => {this.setState({email: text})}} lable="Email Address"> </InputField>
						<InputField onChange={(text) => {this.setState({password: text})}} isSecure={true} lable="Password"></InputField>
						

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
								onPress={this.LoginSubmit}
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
