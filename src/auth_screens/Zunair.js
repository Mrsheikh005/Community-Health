import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Zunair extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View>
					<AntDesign size={25} name="arrowleft" color="black" style={{ left: 20, top: 20 }} />
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center', top: 100 }}>
					<Text style={{ fontSize: 20, color: 'black' }}> Give a review and earn</Text>
					<Text> Lorem ipsum dolor sit amet, consectetur </Text>
					<Text> Lorem ipsum dolor sit amet, consectetur </Text>
					<Text> Lorem ipsum dolor sit amet, consectetur </Text>
				</View>

				<View style={{ width: '90%', height: '23.5%', borderWidth: 0.7, top: 200, left: 20, borderRadius: 18 }}>
					<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', left: 20, top: 5 }}>
						{' '}
						Order #134655109
					</Text>
					<View style={{ left: 7, top: 20, flexDirection: 'row' }}>
						<Image
							style={{ height: 80, width: 80, borderRadius: 20 }}
							source={require('../assets/images/drawables/123.jpg')}
						/>
						<Text> Nike Run Shoes Premium {'\n'} Quality ...x1 </Text>
						<Text style={{ left: 65, top: 3, color: 'black' }}>$450</Text>
					</View>
					<View style={{ left: 90, bottom: 10, flexDirection: 'row' }}>
						<Text>Delivered on 12/12/22 12:48</Text>
						<View
							style={{
								height: 30,
								width: 75,
								borderWidth: 0,
								bottom: 5,
								left: 9,
								borderRadius: 25,
								backgroundColor: 'lightgrey'
							}}
						>
							<Text style={{ left: 6, top: 3 }}>Delivered</Text>
						</View>
					</View>
					<TouchableOpacity
						style={{
							borderWidth: 0.2,
							height: 44,
							bottom: 10,
							borderBottomLeftRadius: 9,
							borderBottomRightRadius: 9
						}}
					>
						<View style={{ justify: 'center', alignItems: 'center', top: 10 }}>
							<Text style={{ color: 'blue' }}>Submit a review and earn</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={{ width: '90%', height: '23.5%', borderWidth: 0.7, top: 220, left: 20, borderRadius: 18 }}>
					<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', left: 20, top: 5 }}>
						{' '}
						Order #134655109
					</Text>
					<View style={{ left: 7, top: 20, flexDirection: 'row' }}>
						<Image
							style={{ height: 80, width: 80, borderRadius: 20 }}
							source={require('../assets/images/drawables/123.jpg')}
						/>
						<Text> Nike Run Shoes Premium {'\n'} Quality ...x1 </Text>
						<Text style={{ left: 65, top: 3, color: 'black' }}>$450</Text>
					</View>
					<View style={{ left: 90, bottom: 10, flexDirection: 'row' }}>
						<Text>Delivered on 12/12/22 12:48</Text>
						<View
							style={{
								height: 30,
								width: 75,
								borderWidth: 0,
								bottom: 5,
								left: 9,
								borderRadius: 25,
								backgroundColor: 'lightgrey'
							}}
						>
							<Text style={{ left: 6, top: 3 }}>Delivered</Text>
						</View>
					</View>
					<TouchableOpacity
						style={{
							borderWidth: 0.2,
							height: 44,
							bottom: 10,
							borderBottomLeftRadius: 9,
							borderBottomRightRadius: 9
						}}
					>
						<View style={{ justify: 'center', alignItems: 'center', top: 10 }}>
							<Text style={{ color: 'blue' }}>Submit a review and earn</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
