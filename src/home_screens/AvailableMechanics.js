import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList,SafeAreaView} from 'react-native';
import { primaryColor } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

export default class AvailableMechanics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5,
			// Array of Data (items)
			Data: [
				{
					id: 1,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 2,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 3,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 4,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 5,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 6,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 7,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 8,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 9,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				},
				{
					id: 10,
					name: 'Bashir Mechanic',
					experience: '2 years',
					level: 'Skill level',
					image: require('../assets/images/Avatar.png')
				}
			]
		};
	}

	ProductsView = (props) => {
		return (
			<View style={{ flex: 1, backgroundColor: 'white', top: 10, marginBottom: 10 }}>
				<TouchableOpacity
					onPress={() => {this.props.navigation.navigate('MechanicInfo')}}
					style={{ backgroundColor: '#F9ECFF', marginHorizontal: 20, borderRadius: 8, paddingVertical: 30 }}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ alignItems: 'flex-start', left: 10 }}>
							<Image source={require('../assets/images/Avatar.png')} />
						</View>

						<Text style={{ left: 30, fontSize: 15, letterSpacing: 0.5, color: 'black' }}>
							Bashir Mechanic {'\n'}Experience: 2 years {'\n'}Skills level: Expert
						</Text>
					</View>
					<View style={{ zIndex: 10, width: '50%', left: '15%' }}>
						<StarRating
							disabled={false}
							maxStars={5}
							rating={this.state.starCount}
							selectedStar={(rating) => this.onStarRatingPress(rating)}
							starSize={20}
							halfStarEnabled={true}
							containerStyle={{ marginHorizontal: '15%', top: '1%', left: 10 }}
							starStyle={{ color: 'orange' }}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

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
				<View style={{ flex: 0, marginTop: '10%', alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.8, color: '#68397E' }}>
						Available Mechanics
					</Text>
				</View>
				<View>
					<FlatList horizontal={false} renderItem={this.ProductsView} data={Data} />
				</View>
			</SafeAreaView>
		);
	}
}
