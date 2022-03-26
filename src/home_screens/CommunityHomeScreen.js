import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList,SafeAreaView} from 'react-native';
import { Colors, primaryColor, secondryColor } from '../utils/Styles';
import { useNavigation } from "@react-navigation/native";
// import IconHeader from '../reuseables/IconHeader';
// import IconHeader from '../reuseables/IconHeader';
import HomeHeader from '../reuseables/HomeHeader';
import Mapscreen from './Mapscreen';
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
					image: require('../assets/images/MP.png')
				},
				{
					id: 2,
					name: 'Offer & Promotions',
					
					image: require('../assets/images/OP.png')
				},
				{
					id: 3,
					name: 'Home Healthcare',
					
					image: require('../assets/images/HH.png')
				},
				{
					id: 4,
					name: 'Cosmetic Offers',
					image: require('../assets/images/CO.png')
				},
				{
					id: 5,
					name: 'Medical Tourism',
					onpress: 'Medical_Tourism',
					image: require('../assets/images/MT.png')
				},
				{
					
					id: 6,
					name: 'Job Portal',
					onpress:'JobPortal',
					image: require('../assets/images/JP.png')
				},
				{
					id: 7,
					name: 'TeleHealth',
					onpress: 'AvailableDoctors',
					image: require('../assets/images/TS.png')
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
					image: require('../assets/images/BM.png')
				},
				{
					id: 11,
					name: 'Medical Education',
					onpress: 'Medical_Eduction',
					image: require('../assets/images/ME.png')
				},
				{
					id: 12,
					name: 'Order Pharmacy',
					onpress: 'ShoppingForm',
					image: require('../assets/images/Offers.png')
					// image: require('../assets/images/OP.png')
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
				
				<HomeHeader/>
				{/* <View style={{width:'100%',height:'8%',elevation:15,flexDirection:'row' ,justifyContent:'space-between',paddingHorizontal:'2%'}}>
				<Image style={{resizeMode:'contain',height:'100%',width:'25%' }} source={require('../assets/images/Logo.png')} />
				<View style={{flexDirection:'row' ,justifyContent:'space-evenly'}}>
				<Image style={{resizeMode:'contain',height:'100%',width:'20%',borderRadius:5 }} source={require('../assets/images/flag.png')} />
				<Text style={{color:secondryColor, fontSize:14,fontWeight:'bold',alignSelf:'center',width:'30%'}}>Deliver To UAE</Text>
				</View>
				<TouchableOpacity onPress={() => {this.props.navigation.navigate('Cart')}} style={{height:'100%',width:'20%',alignItems:'center',justifyContent:'center'}}>
				<Feather name="shopping-cart" size={30} color={secondryColor} style={{alignSelf:'center'}}/>
				</TouchableOpacity>
				</View> */}
				
				<View stye={{flex:1}}>
					<Text style={{fontSize:20,color:Colors.black, alignSelf:'center',paddingBottom:'2%',fontWeight:'bold',marginTop:'2%'}}>Browse among categories</Text>
					<FlatList horizontal={false} numColumns={2} style={{height:'100%'}} renderItem={({ item }) => (
                               <View style={{ borderRadius:10,overflow:'hidden', flex: 1, marginVertical: 10,marginHorizontal:'2%', backgroundColor: Colors.white, elevation:15 }}>
							   <TouchableOpacity
								   onPress={() => {this.props.navigation.navigate(item.onpress)}}
								   style={{    borderColor:secondryColor,overflow:'hidden'}}
							   >
								   <View style={{ flexDirection: 'row',flex:1 }}>
									   <View style={{ alignItems: 'center',height:150,width:150,flex:1,overflow:'hidden',alignSelf:'center',justifyContent:'center'}}>
										   <Image  source={item.image} resizeMode={'center'} style={{alignSelf:'center'}} />
									   </View>
			   
									   
								   </View>
								   <View style={{ zIndex: 10, width: '100%',justifyContent:'space-between',backgroundColor:secondryColor }}>
									   <Text style={{fontSize:14,marginTop: '5%', fontWeight:'700', color:Colors.white, alignSelf:'center',paddingVertical:'5%'}}>{item.name}</Text>
									   
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
