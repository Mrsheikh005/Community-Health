import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import { primaryColor } from '../utils/Styles';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../utils/Styles';
import StarRating from 'react-native-star-rating';

export default class DoctorsInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5,
			// Array of Data (items)
			Data: [
				{
					id: 1,
					name: 'Dr.Ali',
					experience: '2 years',
					starcount: 4,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 2,
					name: 'Dr.Babar',
					experience: '2 years',
					starcount: 4,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 3,
					name: 'Dr.Amjad',
					experience: '2 years',
					starcount: 2,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 4,
					name: 'Dr.Zeeshan',
					experience: '2 years',
					starcount: 4,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 5,
					name: 'Dr.Mohis',
					experience: '2 years',
					starcount: 4.5,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 6,
					name: 'Dr.Tafsheen',
					experience: '2 years',
					starcount: 3,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 7,
					name: 'Dr.Huzaifa',
					experience: '2 years',
					starcount: 4,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 8,
					name: 'Dr.Aleem',
					experience: '2 years',
					starcount: 4,
					image: require('../../assets/images/Avatar.png')
				},
				{
					id: 9,
					name: 'Dr.Abraar',
					experience: '2 years',
					starcount: 5,
					image: require('../../assets/images/Avatar.png')
				},
			]
		};
	}

	// ProductsView = (props) => {
	// 	return (
			
	// 	);
	// };

	render() {
		const { Data } = this.state;
		return (
			<SafeAreaView style={{ flex: 1,backgroundColor: 'white'}}>
				<View style={{width:'100%',height:'8%',flexDirection:'row' ,justifyContent:'space-around',alignSelf:'center'}}>
				<TouchableOpacity onPress={() => {this.props.navigation.goback()}} style={{height:'100%',width:'20%',alignItems:'center',justifyContent:'center'}}>
				<Feather name="chevron-left" size={30} color={Colors.secondryColor} style={{alignSelf:'center'}}/>
				</TouchableOpacity>
				<View style={{flexDirection:'row' ,justifyContent:'space-evenly'}}>
				<Image style={{resizeMode:'contain',height:'100%',width:'20%',borderRadius:5 }} source={require('../../assets/images/flag.png')} />
				<Text style={{color:Colors.secondryColor, fontSize:14,fontWeight:'bold',alignSelf:'center',width:'30%'}}>Deliver To UAE</Text>
				</View>
				<TouchableOpacity onPress={() => {this.props.navigation.navigate('Cart')}} style={{height:'100%',width:'20%',alignItems:'center',justifyContent:'center'}}>
				<Feather name="shopping-cart" size={30} color={Colors.secondryColor} style={{alignSelf:'center'}}/>
				</TouchableOpacity>
				</View>
				<View style={{ flex: 0, backgroundColor: 'white', top: 10, marginBottom: 10 }}>
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
						<View style={{ justifyContent: 'center', alignItems: 'center',flex:1}}>
							<View style={{ bottom: '90%', position: 'absolute' }}>
								<Image
									style={{ height: 80, width: 80 }}
									source={require('../../assets/images/Avatar.png')}
								/>
							</View>
							<View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }}>
								<Text style={{ fontSize: 15, letterSpacing: 1, color: Colors.secondryColor, fontWeight: 'bold' }}>
									Dr. Strange
								</Text>

								<View style={{flex:1,backgroundColor:'red'}}>
                                <View>
                                <Text style={{ fontSize: 15, letterSpacing: 0.5, color: 'grey', top: 10 }}>
									Orders
								</Text>
                                </View>
                                </View>
                                {/* <Text style={{ fontSize: 15, letterSpacing: 0.5, color: 'grey', top: 10 }}>
									Orders --------------------------------- 23 {'\n'}
									{'\n'}
									Completed --------------------------------- 21{'\n'}
									{'\n'}Pending ---------------------------------- 02
								</Text> */}
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								top: '13%',
								justifyContent: 'space-between',
								paddingHorizontal: 35
							}}
						>
							<StarRating
								disabled={false}
								maxStars={5}
								starSize={20}
                                rating={4.5}
								halfStarEnabled={true}
								containerStyle={{}}
								starStyle={{ color: 'orange' }}
							/>
							<View style={{}}>
								<Text style={{ fontSize: 15, color: 'grey' }}>4.5</Text>
							</View>
						</View>

						<View>
							<View
								style={{
									marginBottom: 20,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-around',
									marginHorizontal: 10,
									marginTop: 55
								}}
							>
								

								<View>
									<TouchableOpacity
										style={{
											padding: 15,
											paddingLeft: 60,
											paddingRight: 60,
											borderRadius: 8,
											backgroundColor: Colors.primaryColor
										}}
										onPress={() => {
											this.props.navigation.navigate('BookingMechanic');
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
						<Text style={{ fontSize: 15, letterSpacing: 1, color: Colors.secondryColor, fontWeight: 'bold' }}>
							More like this
						</Text>
						<View>
							<FlatList
								horizontal={true}
								showsHorizontalScrollIndicator={false}
                                // numColumns={2}
								renderItem={({ item }) => (
                                    <View style={{ flex: 1, top: 20 }}>
				<TouchableOpacity
					style={{
						backgroundColor:"#EEFFF1",
						borderRadius: 8,
						paddingVertical: 40,
						paddingHorizontal: 20,
						marginHorizontal: 5
					}}
				>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<View style={{ bottom: 20 }}>
							<Image source={item.image} />
						</View>

						<Text style={{ fontSize: 15, letterSpacing: 0.5, color: 'black' }}>{item.name}</Text>
					</View>
				</TouchableOpacity>
			</View>
                                )}
								data={Data}
							/>
						</View>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}
