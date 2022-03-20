import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import { primaryColor } from '../utils/Styles';
import Feather from 'react-native-vector-icons/Feather';
import TransparentHeader from '../../reuseables/TransparentHeader/TransparentHeader';
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
				<TransparentHeader title="Doctor Profile" />
				<View style={{ flex: 0, backgroundColor: 'white', top: '4%', marginBottom: 10 }}>
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
							
						</View>
						<Text style={{ fontSize: 18, color: Colors.black,fontWeight:'bold',alignSelf:'center',marginVertical:'1%'}}>
						Doctor Strange
							</Text>
						<View
							style={{
								flexDirection: 'row',
								// top: '13%',
								justifyContent: 'space-between',
								paddingHorizontal: 35,
								marginVertical:'1%'
							}}
						>
							<Text style={{ fontSize: 16, color: 'grey',fontWeight:'700'}}>
								Appointments
							</Text>
							<View style={{}}>
								<Text style={{ fontSize: 16, color: 'grey',fontWeight:'700' }}>23</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								// top: '13%',
								justifyContent: 'space-between',
								paddingHorizontal: 35,
								marginVertical:'1%'
							}}
						>
							<Text style={{ fontSize: 16, color: 'grey',fontWeight:'700' }}>
								Completed
							</Text>
							<View style={{}}>
								<Text style={{ fontSize: 16, color: 'grey',fontWeight:'700' }}>21</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								// top: '13%',
								justifyContent: 'space-between',
								paddingHorizontal: 35,
								marginVertical:'1%'
							}}
						>
							<Text style={{ fontSize: 16, color: 'grey',fontWeight:'700' }}>
								Pending
							</Text>
							<View style={{}}>
								<Text style={{ fontSize: 16, color: 'grey',fontWeight:'700' }}>02</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								// top: '13%',
								justifyContent: 'space-between',
								paddingHorizontal: 35,
								marginVertical:'1%'
							}}
						>
							<StarRating
								disabled={false}
								maxStars={5}
								starSize={16}
                                rating={4.5}
								halfStarEnabled={true}
								containerStyle={{}}
								starStyle={{ color: 'orange' }}
							/>
							<View style={{}}>
								<Text style={{ fontSize: 16, color: 'grey',fontWeight:'700' }}>4.5</Text>
							</View>
						</View>

						<View>
							<View
								style={{
									marginBottom: '3%',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-around',
									marginHorizontal: 10,
									marginTop: '1%'
								}}
							>
								

								<View>
									<View style={{flexDirection:'row'}}>
									<TouchableOpacity
										style={{
											padding: 15,
											paddingLeft: 60,
											paddingRight: 60,
											borderRadius: 8,
											marginRight:5,
											backgroundColor:'#EAFFEE'
										}}
										onPress={() => {
											
										}}
									>
										<Text style={{ color: Colors.primaryColor, fontWeight: 'bold', fontSize: 14 }}>
											Inquire
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											padding: 15,
											paddingLeft: 60,
											paddingRight: 60,
											borderRadius: 8,
											marginLeft:5,
											backgroundColor: Colors.primaryColor
										}}
										onPress={() => {
											this.props.navigation.navigate('VideoScreen')
										}}
									>
										<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
											Book Now
										</Text>
									</TouchableOpacity>
									</View>
									
								</View>
							</View>
						</View>
					</View>
					<View style={{ marginTop: '12%', marginHorizontal: '5%' }}>
					<Text style={{color:Colors.black, fontSize:18, fontWeight:'700',marginTop:'3%'}}>
                           About This Doctor
                        </Text>
                        <Text style={{color:Colors.gray, fontSize:16,marginBottom:'3%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque aliquet, cursus augue in, pellentesque felis. Aenean a massa a leo feugiat ornare eu et sem. Aliquam sed neque lacinia, egestas sem ac, venenatis orci. Morbi pretium feugiat nisi, finibus egestas sapien luctus nec. 
                        </Text>
						<Text style={{color:Colors.black, fontSize:18, fontWeight:'700',marginTop:'1%'}}>
						Speciality
                        </Text>
                        <Text style={{color:Colors.secondryColor, fontSize:15, fontWeight:'700',marginBottom:'3%'}}>
						Asthama, Flana, Dhimkana Etc.
                        </Text>
						<Text style={{ fontSize: 18, fontWeight:'700', color: Colors.black, fontWeight: 'bold' }}>
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
