import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import BigHeader from '../reuseables/BigHeader';
import languages from '../assets/languages/English.json';
export default class SuccessfulView extends Component {
	render() {
		const { msg1, msg2, lable1 = '', lable2 = '' } = this.props;
		return (
			<View>
				<BigHeader
					iconView={{ marginVertical: 5 }}
					containerStyle={{ justifyContent: 'center', paddingTop: 10, paddingBottom: 10, borderRadius: 15 }}
					icon={
						<Image
							style={{ resizeMode: 'contain', width: 180 }}
							source={require('../assets/images/icons/orderCompletedLogo.png')}
						/>
					}
					msg1Style={{ marginVertical: 5 }}
					lable1={lable1}
					lable2={lable2}
					msg1={msg1}
					msg2={msg2 ? msg2 : ''}
				/>
			</View>
		);
	}
}
