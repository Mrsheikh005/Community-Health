import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, TextInput} from 'react-native';
import { Colors, primaryColor } from '../utils/Styles';
import InputField1 from '../reuseables/InputField1';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

export default class AvailableStores extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5,
			// Array of Data (items)
			Data: []
		};
	}
	componentWillMount() {
		// this.renderMyData();
		;
		return fetch('https://communityhealth.ae/api/v1/products')
			.then((response) => response.json())
			.then((json) => {
				//   return json.movies;
				this.setState({ Data: json.data });
				// console.log("https://pharmacy.shahjahanxd.xyz/images/" + this.state.Data.shopProfile )
			})
			.catch((error) => {
				console.error(error);
			});
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	render() {
		const { Data } = this.state;
		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'space-between', marginBottom:'20%'}}>
				<TransparentHeader title="Shop Medical Products" />

				<View stye={{}}>
				<TextInput placeholder="Shop Medical Products" placeholderTextColor={Colors.gray} style={{
        height: 50,
        width: '95%',
        backgroundColor:Colors.white,
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY_02_4,
        paddingLeft: '2%',
        marginVertical: '4%',
        borderRadius: 5,
		elevation:10,
        // marginHorizontal: '1%',
		alignSelf:'center'


    }}> 
	<Feather name="search" size={22} color={primaryColor}/>
	</TextInput>

					<FlatList
						horizontal={false}
						numColumns={2}
						renderItem={({ item }) => (
							<View
								style={{
									flex: 1,
									marginVertical: 10,
									paddingBottom: '2%',
									marginHorizontal: '2%',
									backgroundColor: Colors.white,
									borderRadius:10,
									overflow:'hidden',
									elevation:10
								}}
							>
								<TouchableOpacity
									onPress={() => {
										this.props.navigation.navigate('ShoppingForm');
									}}
									style={{ marginHorizontal: 0, paddingBottom: 2 }}
								>
									<View style={{ flexDirection: 'row', flex: 1 }}>
										<View style={{ alignItems: 'center', flex: 1 }}>
											<Image style={{ width: '100%', height: 120 }} source={{uri:'https://communityhealth.ae/public/' + item.thumbnail_image} }/>
										</View>
									</View>
									<View
										style={{
											zIndex: 10,
											marginTop:'3%',
											width: '90%',
											left: '5%',
											justifyContent: 'space-between'
										}}
									>
										<Text
											style={{
												fontSize: 14,
												marginTop: '5%',
												fontWeight: '700',
												color: Colors.black
											}}
										>
											{item.name}
										</Text>
										<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
										<StarRating
											disabled={false}
											maxStars={5}
											rating={item.rating}
											selectedStar={(rating) => this.onStarRatingPress(rating)}
											starSize={14}
											halfStarEnabled={true}
											containerStyle={{ marginHorizontal: '0%',alignSelf:'center'}}
											starStyle={{ color: Colors.golden }}
										/>
										<Text style={{ fontSize: 13, fontWeight: '700', color: Colors.green,alignSelf:'center' }}>
											{'AED  '+ item.base_price}
										</Text>
										</View>
									</View>
								</TouchableOpacity>
							</View>
						)}
						data={Data}
					/>
				</View>
				<View />
			</SafeAreaView>
		);
	}
}
