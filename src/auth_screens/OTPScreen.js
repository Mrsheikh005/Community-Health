import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ReactModal from '../reuseables/Modal';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import languages from '../assets/languages/English.json';
import { Colors, headings, primaryColor, secondryColor, white, container, textColor, form } from '../utils/Styles';
import Btn1 from '../reuseables/Btn1';
import SuccessfulView from './SuccessfulView';
import IconHeader from '../reuseables/IconHeader';



// const PIN_COUNT = 5;

export default class OTPScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

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
				<ScrollView contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}>
					<View style={{ alignItems: 'center' ,marginHorizontal:'2%'}}>
						<Image source={require('../assets/images/OTP.png')} style={{resizeMode:'contain',height:'60%'}}/>
					</View>
					<View style={styles.View1}>
						<Text style={styles.t1}>{languages.sendotptext}</Text>
					</View>
					

					<View>
						<Btn1
							containerStyle={{ marginBottom: 5 }}
							lable={languages.Login}
							lableStyle={{ ...headings.h6M,color: white }}
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

const styles = StyleSheet.create({
	View1: {
		// paddingTop: 30,
		// marginHorizontal: 30
		justifyContent:'center',
		alignSelf:'center'
	},
	t1: {
		// paddingHorizontal: 5,
		textAlign:'center',
		// fontSize:15,
		color: Colors.black,
		textAlign: 'center',
		...headings.h7M
	},
	t2: {
		paddingVertical: 5,
		color: Colors.black,
		...headings.h7M,
		textAlign: 'center'
	},
	borderStyleBase: {
		width: 30,
		height: 45
	},

	borderStyleHighLighted: {
		borderColor: Colors.blue
	},

	underlineStyleBase: {
		width: 40,
		height: 50,
		borderWidth: 2,
		borderRadius: 8,
		fontSize: 25,
		color: primaryColor
	},

	underlineStyleHighLighted: {
		borderColor: textColor
	}
});
