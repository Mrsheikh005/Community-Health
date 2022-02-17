import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
export default class MechanicView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5
		};
	}
	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<TouchableOpacity
					style={{ backgroundColor: '#F9ECFF', marginHorizontal: 20, borderRadius: 8, paddingVertical: 40 }}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ alignItems: 'flex-start', left: 10 }}>
							<Image source={require('../assets/images/Avatar.png')} />
						</View>

						<Text style={{ left: 30, fontSize: 17, letterSpacing: 0.5, color: 'black' }}>
							Bashir Mechanic {'\n'}Experience: 2 years {'\n'}Skills level: Expert
						</Text>
					</View>
					<View style={{ zIndex: 10 }}>
						<StarRating
							disabled={false}
							maxStars={5}
							rating={this.state.starCount}
							selectedStar={(rating) => this.onStarRatingPress(rating)}
							starSize={20}
							halfStarEnabled={true}
							containerStyle={{ marginHorizontal: '30%', right: '120%', top: '1%' }}
							starStyle={{ color: 'yellow' }}
							starSize={25}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
