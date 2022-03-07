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
			]
		};
	}
	componentWillMount() {
        // this.renderMyData();
		console.log(this.state.email)
		return fetch('https://pharmacy.shahjahanxd.xyz/api/shop/get-all-shops')
    .then((response) => response.json())
    .then((json) => {
    //   return json.movies;
	this.setState({Data: json.data})
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
										   <Image style={{width:'100%',height:150}} source={item.shopProfile} />
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
									   <Text style={{fontSize:15, fontWeight:'700', color:Colors.green}}>{item.address}</Text>
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
