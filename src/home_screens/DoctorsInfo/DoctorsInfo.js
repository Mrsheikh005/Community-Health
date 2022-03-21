import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import { primaryColor } from '../utils/Styles';
import Feather from 'react-native-vector-icons/Feather';
import TransparentHeader from '../../reuseables/TransparentHeader/TransparentHeader';
import { Colors } from '../../utils/Styles';
import StarRating from 'react-native-star-rating';
import { ScrollView } from 'react-native';

export default class DoctorsInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5,
			// Array of Data (items)
			
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
									<View style={{flexDirection:'row', alignSelf:'center'}}>
									<TouchableOpacity
										style={{
											padding: 15,
											width:'45%',
											borderRadius: 8,
											marginRight:5,
											backgroundColor:'#EAFFEE'
										}}
										onPress={() => {
											
										}}
									>
										<Text style={{ color: Colors.primaryColor,alignSelf:'center', fontWeight: 'bold', fontSize: 14 }}>
											Inquire
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											padding: 15,
											width:'45%',
											borderRadius: 8,
											marginLeft:5,
											backgroundColor: Colors.primaryColor
										}}
										onPress={() => {
											
										}}
									>
										<Text style={{ color: Colors.white, fontWeight: 'bold', fontSize: 14, alignSelf:'center' }}>
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
						
						
					</View>
				</View>
				
			</SafeAreaView>
		);
	}
}
