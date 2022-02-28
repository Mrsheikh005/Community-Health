import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Swiper from 'react-native-swiper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const colors = [ 'Notification', 'Menu', 'Record', 'Staff' ];
export default class CommunityHomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: ''
			
		};
	}
​
	
​
	render() {
		const { Data } = this.state;
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
					<View>
						<Image source={require('../assets/images/flag.png')} style={{ height: 35, width: 50 }} />
					</View>
					<View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
						<Image source={require('../assets/images/CHlogo.png')} style={{ height: 55, width: 170 }} />
					</View>
					<TouchableOpacity>
						<View>
							<MaterialIcons
								name="favorite-border"
								size={20}
								color={'grey'}
								style={{ borderWidth: 0, padding: 5, borderColor: 'grey', borderRadius: 5 }}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View>
							<AntDesign
								name="shoppingcart"
								size={20}
								color={'grey'}
								style={{ borderWidth: 0, padding: 5, borderColor: 'grey', borderRadius: 5 }}
							/>
						</View>
					</TouchableOpacity>
				</View>
				<View>
					<SearchBar
						placeholder="Search Here..."
						lightTheme
						round
						value={this.state.searchValue}
						containerStyle={{ borderRadius: 20, padding: 0, marginHorizontal: 20 }}
					/>
				</View>
				<View style={{ top: 20 }}>
					<SwiperFlatList
						autoplay
						autoplayDelay={2}
						autoplayLoop
						index={0}
						showPagination
						paginationStyle={{ bottom: -30 }}
						// paginationStyleItemActive={{width:20}}
						paginationDefaultColor={'#006699'}
						paginationActiveColor={'#37DD56'}
						data={colors}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<View
									style={{
										borderWidth: 0,
										marginHorizontal: 10,
										height: 120,
										width: 300,
										elevation: 2
									}}
								>
									<Image
										source={require('../assets/images/med.png')}
										style={{ height: '100%', width: '100%' }}
									/>
								</View>
							</TouchableOpacity>
						)}
					/>
				</View>
				{/* <View>
					<FlatList
						horizontal={false}
						renderItem={this.ProductsView}
						data={Data}
						numColumns={2}
						containerStyle={{}}
					/>
				</View> */}
​
				<ScrollView contentContainerStyle={{}} showsVerticalScrollIndicator={false}>
					<View style={{}}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-around',
								top: 60,
								alignItems: 'center'
							}}
						>
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/Shop.jpg')}
										style={{ height: 100, width: 120, left: 10 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Shop Medical Products</Text>
							</TouchableOpacity>
​
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/offers.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Offers And Promotions</Text>
							</TouchableOpacity>
						</View>
​
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 60 }}>
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/home.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Home Health Care</Text>
							</TouchableOpacity>
​
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/cosmetics.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Cosmetic Offers</Text>
							</TouchableOpacity>
						</View>
​
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 60 }}>
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/tourism.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Medical Tourism</Text>
							</TouchableOpacity>
​
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/education.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Medical Education</Text>
							</TouchableOpacity>
						</View>
​
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 60 }}>
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/job.jpg')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Job Portal</Text>
							</TouchableOpacity>
​
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/telehealth.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Telehealth{'\n'}and Virtual Health</Text>
							</TouchableOpacity>
						</View>
​
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 60 }}>
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/provider.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Health Providers in UAE</Text>
							</TouchableOpacity>
​
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/telehealth.png')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Health Transport</Text>
							</TouchableOpacity>
						</View>
​
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 60 }}>
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/insurance.jpg')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Order Pharmacy Online</Text>
							</TouchableOpacity>
​
							<TouchableOpacity>
								<View style={{ borderWidth: 0, borderRadius: 5, elevation: 1 }}>
									<Image
										source={require('../assets/images/order.jpg')}
										style={{ height: 120, width: 120 }}
									/>
								</View>
								<Text style={{ color: 'black' }}>Telehealth and Virtual Health</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}