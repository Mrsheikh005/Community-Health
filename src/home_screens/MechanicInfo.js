import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList,SafeAreaView } from 'react-native';
import { primaryColor } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

export default class MechanicInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5,
			// Array of Data (items)
			Data: [
				{
					id: 1,
					name: 'Rafique Ali',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 2,
					name: 'Rafique Ali',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 3,
					name: 'Rafique Ali',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 4,
					name: 'Rafique Ali',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 5,
					name: 'Rafique Ali',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 6,
					name: 'Rafique Ali',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 7,
					name: 'Rafique Ali',
					image: require('../assets/images/Avatar.png')
				}
			]
		};
	}

	ProductsView = (props) => {
		return (
			<View style={{ flex: 1, top: 20 }}>
				<TouchableOpacity
					style={{
						backgroundColor: '#F9ECFF',
						borderRadius: 8,
						paddingVertical: 40,
						paddingHorizontal: 20,
						marginHorizontal: 5
					}}
				>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<View style={{ bottom: 20 }}>
							<Image source={require('../assets/images/Avatar.png')} />
						</View>

						<Text style={{ fontSize: 15, letterSpacing: 0.5, color: 'black' }}>Rafique Ali</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		const { Data } = this.state;
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
				<View style={{ flex: 1, backgroundColor: 'white', top: 10, marginBottom: 10 }}>
					<View
						style={{
							backgroundColor: 'white',
							marginHorizontal: 20,
							borderRadius: 8,
							paddingVertical: 30,
							elevation: 4,
							top: 40
						}}
					>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<View style={{ bottom: '90%', position: 'absolute' }}>
								<Image
									style={{ height: 80, width: 80 }}
									source={require('../assets/images/Avatar.png')}
								/>
							</View>
							<View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }}>
								<Text style={{ fontSize: 15, letterSpacing: 1, color: 'black', fontWeight: 'bold' }}>
									Beshir Mechanic
								</Text>

								<Text style={{ fontSize: 15, letterSpacing: 0.5, color: 'dark-grey', top: 10 }}>
									Orders --------------------------------------- 23 {'\n'}
									{'\n'}
									Completed --------------------------------- 21{'\n'}
									{'\n'}Pending ------------------------------------- 02
								</Text>
							</View>
						</View>
						<View style={{ zIndex: 10, width: '50%', flexDirection: 'row' }}>
							<StarRating
								disabled={false}
								maxStars={5}
								starSize={20}
								halfStarEnabled={true}
								containerStyle={{ marginHorizontal: '28%', top: 40 }}
								starStyle={{ color: 'orange' }}
							/>
							<View style={{ marginHorizontal: '40%', top: 40 }}>
								<Text style={{ fontSize: 15, color: 'dark-grey', left: 17 }}>4.5</Text>
							</View>
						</View>

						<View>
							<View
								style={{
									marginBottom: 20,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginHorizontal: 20,
									marginTop: 55
								}}
							>
								<View>
									<TouchableOpacity
										style={{
											padding: 15,
											paddingLeft: 50,
											paddingRight: 50,
											borderRadius: 8,
											backgroundColor: '#F9ECFF'
										}}
									>
										<Text style={{ color: '#68397E', fontWeight: 'bold', fontSize: 15 }}>
											Inquire
										</Text>
									</TouchableOpacity>
								</View>

								<View>
									<TouchableOpacity onPress={this.props.navigation.navigate('BookingMechanic')}
										style={{
											padding: 15,
											paddingLeft: 50,
											paddingRight: 50,
											borderRadius: 8,
											backgroundColor: '#68397E'
										}}
									>
										<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
											Booking
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<View style={{ marginTop: '18%', marginLeft: '5%' }}>
						<Text style={{ fontSize: 15, letterSpacing: 1, color: 'black', fontWeight: 'bold' }}>
							More like this
						</Text>
						<View>
							<FlatList
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								renderItem={this.ProductsView}
								data={Data}
							/>
						</View>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}
