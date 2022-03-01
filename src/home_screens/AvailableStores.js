import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList,SafeAreaView} from 'react-native';
import { Colors, primaryColor } from '../utils/Styles';
import { useNavigation } from "@react-navigation/native";
// import IconHeader from '../reuseables/IconHeader';
// import IconHeader from '../reuseables/IconHeader';

import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

export default class AvailableStores extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5,
			// Array of Data (items)
			Data: [
				{
					id: 1,
					name: 'Store 1',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 2,
					name: 'Store 2',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 3,
					name: 'Store 3',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 4,
					name: 'Store 4',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 5,
					name: 'Store 5',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					
					id: 6,
					name: 'Store 6',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 7,
					name: 'Store 7',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 8,
					name: 'Store 8',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 9,
					name: 'Store 9',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				},
				{
					id: 10,
					name: 'Store 10',
					rate: '2.27 ',
					level: 'Skill level',
					image: require('../assets/images/Image.jpg')
				}
			]
		};
	}

	

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	render() {
		const { Data } = this.state;
		return (
			<SafeAreaView style={{ flex: 1,justifyContent:'space-between' }}>
				
				<TransparentHeader title="Shop Medical Products"/>
				
				<View stye={{}}>
					<FlatList horizontal={false} numColumns={2} renderItem={({ item }) => (
                               <View style={{ flex: 1, marginBottom: 10,paddingVertical:'2%',marginHorizontal:'2%', backgroundColor: Colors.white }}>
							   <TouchableOpacity
								   onPress={() => {this.props.navigation.navigate('ShoppingForm')}}
								   style={{  marginHorizontal: 5, paddingBottom: 2 }}
							   >
								   <View style={{ flexDirection: 'row',flex:1 }}>
									   <View style={{ alignItems: 'center',flex:1}}>
										   <Image style={{width:'100%',height:150}} source={item.image} />
									   </View>
			   
									   
								   </View>
								   <View style={{ zIndex: 10, width: '40%', left: '5%',justifyContent:'space-between' }}>
									   <Text style={{fontSize:15,marginTop: '5%', fontWeight:'700', color:Colors.black}}>{item.name}</Text>
									   <StarRating
										   disabled={false}
										   maxStars={5}
										   rating={this.state.starCount}
										   selectedStar={(rating) => this.onStarRatingPress(rating)}
										   starSize={12}
										   halfStarEnabled={true}
										   containerStyle={{ marginHorizontal: '0%', top: '1%', marginTop:'15%'}}
										   starStyle={{ color:Colors.golden}}
									   />
									   <Text style={{fontSize:15, fontWeight:'700', color:Colors.green}}>AED {item.rate}</Text>
								   </View>
							   </TouchableOpacity>
						   </View>
                            )} data={Data} />
				</View>
				<View/>
			</SafeAreaView>
		);
	}
}
