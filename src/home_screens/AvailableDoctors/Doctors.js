import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList,SafeAreaView, ScrollView} from 'react-native';
import { primaryColor,Styles, secondryColor } from '../utils/Styles';

import Feather from 'react-native-vector-icons/Feather';

import StarRating from 'react-native-star-rating';
import { Colors } from '../../utils/Styles';

export default class AvailableDoctors extends Component {
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

	
	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	render() {
		const { Data } = this.state;
		return (
			// <ScrollView>
			<SafeAreaView style={{ flex: 1, backgroundColor: 'white',marginBottom:'25%' }}>
				
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
				<View style={{ marginVertical: '2%', alignItems: 'center', justifyContent: 'center' }}>
                
					<Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1, color: Colors.primaryColor }}>
						Available Doctors
					</Text>
				</View>
				<View>
					<FlatList horizontal={false} renderItem={this.ProductsView} renderItem={({ item }) => (
                              <View style={{ flex: 1, backgroundColor: 'white', top: 10, marginBottom: 10,   }}>
                              <TouchableOpacity
                                  onPress={() => {this.props.navigation.navigate('DoctorsInfo')}}
                                  style={{ backgroundColor:"#EEFFF1" , marginHorizontal: 20, borderRadius: 8, paddingVertical: 20,justifyContent:'center' }}
                              >
                                  <View style={{ flexDirection: 'row' }}>
                                      <View style={{ alignItems: 'flex-start', left: 10, alignSelf:'center'}}>
                                          <Image style={{resizeMode:'cover'}} source={item.image} />
                                      </View>
              
                                      <View>
                                      <Text style={{  fontSize: 14, fontWeight:'700',alignSelf:'center', color: 'black' }}>
                                          {item.name} {'\n'}{'\n'}{item.experience} {'\n'}
                                      </Text>
                                      <View style={{ zIndex: 10, width: '50%', alignSelf:'center' }}>
                                      <StarRating
                                          disabled={false}
                                          maxStars={5}
                                          rating={item.starcount}
                                          selectedStar={(rating) => this.onStarRatingPress(rating)}
                                          starSize={20}
                                          halfStarEnabled={true}
                                          containerStyle={{ marginHorizontal: '15%', top: '1%' }}
                                          starStyle={{ color: 'orange' }}
                                      />
                                  </View>
                                      </View>
                                      
                                      
                                  </View>
                                 
                              </TouchableOpacity>
                          </View>
                            )} data={Data} />
				</View>
			</SafeAreaView>
			// </ScrollView>
		);
	}
}
