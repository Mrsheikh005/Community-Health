import React, { Component,useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, TextInput,Modal,AsyncStorage} from 'react-native';
import { Colors, primaryColor } from '../../utils/Styles';
// import InputField1 from '../reuseables/InputField1';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
// import HomeHeader from '../reuseables/HomeHeader';
import TransparentHeader from '../../reuseables/TransparentHeader/TransparentHeader';

// import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux'



	 








const AvailableDoctors = () => {
	const storeData = async (item) => {
		console.log('I Am Asynced')
		try {
			const jsonValue = JSON.stringify(item)
			await AsyncStorage.setItem('2', jsonValue)
		  
		  
		} catch (error) {
		  // Error saving data
		}
		navigation.navigate('DoctorsInfo')
	  };

	const [mounted, setMounted] = useState(false)
	const [Data, setData] = useState()
	const navigation = useNavigation();
	



	useEffect(() =>{
		fetch('https://book-appointment.communityhealth.ae/api/all-doctors')
				.then((response) => response.json())
				.then((json) => {
					//   return json.movies;
					setData(json.data);
					
					console.log('I Am Will Mount')
				})
				.catch((error) => {
					console.error(error);
				});
	  },[])



	return (
	  <>
		<SafeAreaView style={{ flex: 1, justifyContent: 'space-between', marginBottom:'35%',backgroundColor:Colors.white}}>
				<TransparentHeader title="Telehealth Services" />

				<View stye={{}}>
				<TextInput placeholder="Telehealth Services" placeholderTextColor={Colors.gray} style={{
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
						renderItem={({ item }) => {
							// const [show, setShow] = useState(false);
							return(
								<View
								style={{
									flex: 1,
									
								}}
							>
								<TouchableOpacity
									onPress={() => {
										addItemToCart
										navigation.navigate('DoctorsInfo')
									}}
									style={{ marginHorizontal: 0, paddingBottom: 2 ,marginVertical: 10,
										paddingBottom: '2%',
										marginHorizontal: '2%',
										backgroundColor: Colors.white,
										borderRadius:10,
										overflow:'hidden',
										elevation:10}}
								>
									<View style={{ flexDirection: 'row', flex: 1 }}>
										<View style={{ alignItems: 'center', flex: 1 }}>
											<Image style={{ width: '100%', height: 150}} source={{uri:'https://book-appointment.communityhealth.ae/public/images/' + item.Image} }/>
										</View>
									</View>
									<View
										style={{
											zIndex: 10,
											marginTop:'2%',
											width: '90%',
											// left: '5%',
											alignSelf:'center',
											alignItems:'center',
											justifyContent: 'space-between'
										}}
									>
										<Text
											style={{
												fontSize: 16,
												marginTop: '5%',
												fontWeight: '700',
												color: Colors.black
											}}
										>
											{item.Fname}
										</Text>
										<Text
											style={{
												fontSize: 14,
												marginTop: '1%',
												fontWeight: '700',
												color: Colors.black
											}}
										>
											{item.Qualifications}
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
										
										</View>
									</View>
								</TouchableOpacity>
								
							</View>
							);
						}}
						data={Data}
					/>
				</View>
				<View />
			</SafeAreaView>
	  </>
	);
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

  
  export default connect(null,mapDispatchToProps)(AvailableDoctors);