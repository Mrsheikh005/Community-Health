import React, { Component, useState, useEffect } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	SafeAreaView,
	TextInput,
	Modal,
	AsyncStorage
} from 'react-native';
import { Colors, primaryColor, headings, container } from '../utils/Styles';
import InputField1 from '../reuseables/InputField1';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import HomeHeader from '../reuseables/HomeHeader';
import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';

// import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';
import Btn1 from '../reuseables/Btn1';

// redux
import { connect } from 'react-redux';
import ReducersActions from '../redux/actions';
import ReducersProps from '../redux/props';
const Product = () => {
// const storeData = async (item) => {
// 	console.log('I Am Asynced')
// 	try {
// 	  await AsyncStorage.setItem(
// 		'@SelectedItem',
// 		item
// 	  );

// 	} catch (error) {
// 	  // Error saving data
// 	}
// 	navigation.navigate('Product')
//   };

const [Quantity, setQuantity] = useState(1)
const [Data, setData] = useState([])
const navigation = useNavigation();
// if(!mounted){
// 	// Code for componentWillMount here
// 	// This code is called only one time before intial render

// 	// const UNSAFE =()=> {
// 	// 	// this.renderMyData();
// 	// 	console.log('I Am Will Mount')
// 	// 	;
// 	// 	return
// 		fetch('https://communityhealth.ae/api/v1/products')
// 			.then((response) => response.json())
// 			.then((json) => {
// 				//   return json.movies;
// 				// setData(json.data);

// 				console.log('I Am Will Mount')
// 			})
// 			.catch((error) => {
// 				console.error(error);
// 			});
// 	// }
//   }

async function fetchData(){
    try {
        const jsonValue = await AsyncStorage.getItem('1')
        const njsonValue = await JSON.parse(jsonValue);
        // setData(njsonValue)
        console.log('I have data')
        console.log(njsonValue.name)
      } catch (error) {
        // Error retrieving data
      }
}

useEffect( () =>{

	fetchData();
  });
// class Product extends Component {
// 	addToCart = () => {
// 		const { updateCart, language } = this.props;
// 		const { product, counter } = this.state;
// 		product.quantity = counter;
// 		product.subtotal = counter * product.price;
// 		updateCart(product);
// 		alert.
// 	};
	// render() {
	
		return (
			<SafeAreaView
				style={{ flex: 1, justifyContent: 'space-between', backgroundColor: Colors.white, paddingBottom: '5%' }}
			>
				<TransparentHeader title="Shop Medical Products" />
				<Image
					style={{ width: '100%', height: '40%' }}
					resizeMode="cover"
					source={{ uri: 'https://communityhealth.ae/public/' + Data.thumbnail_image }}
				/>
				<View style={{ paddingHorizontal: '5%' }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Text style={{ color: Colors.black, fontSize: 18, fontWeight: '700' }}>
							Something + {Data.Name}
						</Text>
						<Feather name="heart" size={30} color={primaryColor} />
					</View>
					<StarRating
						disabled={false}
						maxStars={5}
						rating={Data.rating}
						// selectedStar={(rating) => this.onStarRatingPress(rating)}
						starSize={18}
						halfStarEnabled={true}
						containerStyle={{ marginHorizontal: '0%', alignSelf: 'flex-start' }}
						starStyle={{ color: Colors.golden }}
					/>
					<Text style={{ color: Colors.black, fontSize: 18, fontWeight: '700', marginTop: '3%' }}>
						Description
					</Text>
					<Text style={{ color: Colors.gray, fontSize: 16, marginBottom: '5%' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque aliquet, cursus
						augue in, pellentesque felis. Aenean a massa a leo feugiat ornare eu et sem. Aliquam sed neque
						lacinia, egestas sem ac, venenatis orci. Morbi pretium feugiat nisi, finibus egestas sapien
						luctus nec.
					</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Text style={{ color: Colors.black, fontSize: 18, fontWeight: '700' }}>Quantity:</Text>
						<View style={{ flexDirection: 'row', marginVertical: '5%' }}>
							<TouchableOpacity
								style={{
									height: 35,
									width: 35,
									alignItems: 'center',
									justifyContent: 'center',
									elevation: 5,
									backgroundColor: Colors.white,
									borderRadius: 10
								}}
								onPress={() => {
									setQuantity(Quantity - 1);
								}}
							>
								<Feather name="minus" size={20} color={Colors.black} />
							</TouchableOpacity>
							<Text
								style={{
									color: Colors.black,
									fontSize: 18,
									fontWeight: '700',
									marginHorizontal: 15,
									alignSelf: 'center'
								}}
							>
								{Quantity}
							</Text>
							<TouchableOpacity
								style={{
									height: 35,
									width: 35,
									alignItems: 'center',
									justifyContent: 'center',
									elevation: 5,
									backgroundColor: Colors.white,
									borderRadius: 10
								}}
								onPress={() => {
									setQuantity(Quantity + 1);
								}}
							>
								<Feather name="plus" size={20} color={Colors.black} />
							</TouchableOpacity>
						</View>
						<Text style={{ color: primaryColor, fontSize: 17 }}>In Stock</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Btn1
							lableStyle={{ ...headings.h6M, color: primaryColor }}
							lable="Add to Cart"
							containerStyle={{ backgroundColor: '#EAFFEE', paddingHorizontal: 50 }}
							onPress={() => {this.addToCart()}}
						/>
						<Btn1
							lableStyle={{ ...headings.h6M, color: Colors.white }}
							containerStyle={{ paddingHorizontal: 50 }}
							lable="Order Now"
							// onPress={this.LoginSubmit}
						/>
					</View>
				</View>
			</SafeAreaView>
		);
	
							}
export default connect(ReducersProps, ReducersActions)(Product);
