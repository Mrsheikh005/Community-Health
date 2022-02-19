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

const myref1 = React.createRef();
const modalRef = React.createRef();
const modalRef1 = React.createRef();

const PIN_COUNT = 5;

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
					<View style={{ alignItems: 'center' }}>
						<Image source={require('../assets/images/OTP.png')} />
					</View>
					<View style={styles.View1}>
						<Text style={styles.t1}>{languages.sendotptext}</Text>
					</View>
					<View style={{ alignItems: 'center' }}>
						<OTPInputView
							style={{ width: '80%', height: 200 }}
							pinCount={PIN_COUNT}
							codeInputFieldStyle={styles.underlineStyleBase}
							codeInputHighlightStyle={styles.underlineStyleHighLighted}
							secureTextEntry={false}
							// code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
							// onCodeChanged={code => { this.setState({ code }) }}
							// editable
							// clearInputs={this.state.isclearInput}
							// autoFocusOnLoad={false}
							// onCodeFilled={code => { this.handleOnConfirm() }}
						/>
					</View>

					<View>
						<Btn1
							containerStyle={{ marginBottom: 5 }}
							lable={languages.confirm}
							lableStyle={{ ...headings.h6M,color: white }}
							onPress={() => {
								this.props.navigation.navigate('CreateNewPassword');
							}}
						/>
					</View>

					<View style={{ alignItems: 'center', marginTop: 8 }}>
						<Text style={headings.h5}>{languages.didntgetotp}</Text>
						<TouchableOpacity
							onPress={() => {
								alert('Sent Again ');
							}}
						>
							<Text style={{ ...headings.h6M, color: primaryColor }}>{languages.sendagain}</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>

				<ReactModal ref={modalRef} view={<SuccessfulView msg1={languages.OTPverified} />} />
				<ReactModal ref={modalRef1} view={<SuccessfulView msg1={languages.wesendotp} />} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	View1: {
		paddingTop: 30,
		marginHorizontal: 30
	},
	t1: {
		paddingHorizontal: 5,
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
