import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList,SafeAreaView} from 'react-native';
import { Colors, primaryColor, secondryColor } from '../utils/Styles';
import { useNavigation } from "@react-navigation/native";
// import IconHeader from '../reuseables/IconHeader';
// import IconHeader from '../reuseables/IconHeader';
import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';

import Feather from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';


export default class CommunityHomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3.5,
			// Array of Data (items)
			Data: [
				{
					id: 1,
					name: 'Shop Medical Product',
					onpress: 'AvailableStores',
					image: require('../assets/images/Shop.jpg')
				},
				{
					id: 2,
					name: 'Offer & Promotions',
					
					image: require('../assets/images/Offer.png')
				},
				{
					id: 3,
					name: 'Home Healthcare',
					
					image: require('../assets/images/HH.jpg')
				},
				{
					id: 4,
					name: 'Cosmetic Offers',
					image: require('../assets/images/CO.jpg')
				},
				{
					id: 5,
					name: 'Medical Tourism',
					image: require('../assets/images/MT.jpg')
				},
				{
					
					id: 6,
					name: 'Job Portal',
					
					image: require('../assets/images/JP.jpg')
				},
				{
					id: 7,
					name: 'TeleHealth & VirtualHealth',
					
					image: require('../assets/images/TH.jpg')
				},
				{
					id: 8,
					name: 'HealthProviders in UAE',
					
					image: require('../assets/images/HP.png')
				},
				{
					id: 9,
					name: 'Health Transport',
					
					image: require('../assets/images/HT.png')
				},
				{
					id: 10,
					name: 'Buy Medical Insurance',
					onpress: 'Insurance',
					image: require('../assets/images/BM.jpg')
				},
				{
					id: 11,
					name: 'Medical Education',
					image: require('../assets/images/ME.png')
				},
				{
					id: 12,
					name: 'Order Pharmacy',
					image: require('../assets/images/OP.jpg')
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
			<SafeAreaView style={{ flex: 1,paddingBottom:'25%',justifyContent:'space-between',backgroundColor:Colors.white}}>
				
				<View style={{width:'100%',height:'8%',flexDirection:'row' ,justifyContent:'space-between',paddingHorizontal:'2%'}}>
				<Image style={{resizeMode:'contain',height:'100%',width:'25%' }} source={require('../assets/images/Logo.png')} />
				<View style={{flexDirection:'row' ,justifyContent:'space-evenly'}}>
				<Image style={{resizeMode:'contain',height:'100%',width:'20%',borderRadius:5 }} source={require('../assets/images/flag.png')} />
				<Text style={{color:secondryColor, fontSize:14,fontWeight:'bold',alignSelf:'center',width:'30%'}}>Deliver To UAE</Text>
				</View>
				<TouchableOpacity onPress={() => {this.props.navigation.navigate('Cart')}} style={{height:'100%',width:'20%',alignItems:'center',justifyContent:'center'}}>
				<Feather name="shopping-cart" size={30} color={secondryColor} style={{alignSelf:'center'}}/>
				</TouchableOpacity>
				</View>
				
				<View stye={{flex:1}}>
					<Text style={{fontSize:25,color:Colors.black,alignSelf:'center',marginBottom:'5%',fontWeight:'bold'}}>Categories</Text>
					<FlatList horizontal={false} numColumns={2} style={{height:'100%'}} renderItem={({ item }) => (
                               <View style={{ flex: 1, marginBottom: 10,paddingVertical:'2%',marginHorizontal:'2%', backgroundColor: Colors.white }}>
							   <TouchableOpacity
								   onPress={() => {this.props.navigation.navigate(item.onpress)}}
								   style={{  marginHorizontal: 5, paddingBottom: 2 }}
							   >
								   <View style={{ flexDirection: 'row',flex:1 }}>
									   <View style={{ alignItems: 'center',height:150,width:150,flex:1,borderWidth:0.5,borderRadius:1000,overflow:'hidden',borderColor:primaryColor}}>
										   <Image  source={item.image} resizeMode={'contain'} style={{alignSelf:'center'}} />
									   </View>
			   
									   
								   </View>
								   <View style={{ zIndex: 10, width: '100%',justifyContent:'space-between' }}>
									   <Text style={{fontSize:15,marginTop: '5%', fontWeight:'700', color:primaryColor,alignSelf:'center'}}>{item.name}</Text>
									   
								   </View>
							   </TouchableOpacity>
						   </View>
                            )} data={Data} />
				</View>
				<View/>
				<View/>
			</SafeAreaView>
		);
	}
}
