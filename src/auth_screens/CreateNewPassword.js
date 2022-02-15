import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import IconHeader from '../reuseables/IconHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { primaryColor, container, headings, Colors, secondryColor } from '../utils/Styles';
import languages from '../assets/languages/English.json';
import Btn1 from '../reuseables/Btn1';
import { InputField } from '../reuseables/InputField';
const myref = React.createRef();
const myref1 = React.createRef();

export default class CreateNewPassword extends Component {
	constructor(props) {
		super(props);
		state = {
			newPass: '',
			confirmPass: ''
		};
	}
	toggleSecure = (ref) => {
		ref.current.toggleSecure();
	};

	render() {
		return (
			<View style={container.empty}>
				<IconHeader
					containerStyle={{ elevation: 0 }}
					onleftPress={() => {
						this.props.navigation.goBack();
					}}
					leftBtn={
						<AntDesign size={25} name="arrowleft" color={primaryColor} style={{ left: 20, top: 20 }} />
					}
				/>
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
					<View style={{ paddingVertical: 50, alignItems: 'center' }}>
						<Image source={require('../assets/images/NewPass.png')} />
					</View>

					<View style={{ marginBottom: '30%' }}>
						<InputField
							ref={myref}
							oniconPress={() => this.toggleSecure(myref)}
							isSecure={true}
							lable="New Password"
							icon={<Entypo name="eye" size={20} color={Colors.gray} />}
							// onChange={(txt) => this.setState({ newPass: txt })}
						/>

						<InputField
							ref={myref1}
							oniconPress={() => this.toggleSecure(myref1)}
							isSecure={true}
							lable="Confirm Password"
							icon={<Entypo name="eye" size={20} color={Colors.gray} />}
							// onChange={(txt) => this.setState({ confirmPass: txt })}
						/>

						<Btn1
							containerStyle={{ marginTop: 10 }}
							lableStyle={{ color: secondryColor }}
							lable={languages.createpass}
							onPress={() => {
								this.props.navigation.navigate('Login');
							}}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}