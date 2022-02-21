import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image,SafeAreaView} from 'react-native';
import { primaryColor } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Services extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
				<IconHeader
					onleftPress={() => {
						this.props.navigation.goBack();
					}}
					leftBtn={
						<FontAwesome5
							size={25}
							name="align-justify"
							color={primaryColor}
							style={{ left: 20, top: 20 }}
						/>
					}
				/>
				<View style={{ marginTop: '10%', marginStart: '10%', width: '50%' }}>
					<Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.8, color: '#68397E' }}>
						Good Evening!
					</Text>
					<Text style={{ fontSize: 15, fontWeight: 'bold', letterSpacing: 1, color: '#68397E' }}>
						We are glad to see you!
					</Text>
				</View>
				<View style={{ height: '10%', marginTop: '5%', alignItems: 'center' }}>
					<Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.8, color: 'black' }}>
						What type of Vehicle Services
					</Text>
					<Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 1, color: 'black' }}>
						are you looking for?
					</Text>
				</View>

				<ScrollView
					contentContainerStyle={{ flexGrow: 1 }}
					showsVerticalScrollIndicator={false}
					bouncesZoom={true}
				>
					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('AvailableMechanics');
						}}
						style={{
							backgroundColor: '#F9ECFF',
							marginHorizontal: 20,
							borderRadius: 8,
							paddingVertical: 20
						}}
					>
						<View style={{ alignSelf: 'center' }}>
							<Image source={require('../assets/images/services1.png')} />
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('AvailableMechanics');
						}}
						style={{
							backgroundColor: '#F9ECFF',
							marginHorizontal: 20,
							borderRadius: 8,
							paddingVertical: 20,
							marginTop: '5%'
						}}
					>
						<View style={{ alignSelf: 'center' }}>
							<Image source={require('../assets/images/services1.png')} />
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('AvailableMechanics');
						}}
						style={{
							backgroundColor: '#F9ECFF',
							marginHorizontal: 20,
							borderRadius: 8,
							paddingVertical: 20,
							marginTop: '5%'
						}}
					>
						<View style={{ alignSelf: 'center' }}>
							<Image source={require('../assets/images/services1.png')} />
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('AvailableMechanics');
						}}
						style={{
							backgroundColor: '#F9ECFF',
							marginHorizontal: 20,
							borderRadius: 8,
							paddingVertical: 20,
							marginTop: '5%'
						}}
					>
						<View style={{ alignSelf: 'center' }}>
							<Image source={require('../assets/images/services1.png')} />
						</View>
					</TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
