import React, { Component,useState,useEffect,useCallback} from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, TextInput,Modal,AsyncStorage} from 'react-native';
import { Colors, primaryColor } from '../utils/Styles';
import InputField1 from '../reuseables/InputField1';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import HomeHeader from '../reuseables/HomeHeader';
import TransparentHeader from '../reuseables/TransparentHeader/TransparentHeader';
import { ActivityIndicator,  } from 'react-native-paper';


// import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';
import { withSafeAreaInsets } from 'react-native-safe-area-context';





	 const handleOnSelectItem = (item) => {
		console.log('I Am Modal Function' + item.name)
		return(
			
				<Modal style={{backgroundColor:Colors.white,flex:1}} animationType='slide'  visible={true}>
									<View style={{ flex: 1 }}>
										<Text style={{color:'black'}} >I am the modal content! {item.name}</Text>
										</View>
										</Modal>
			
		);
	  };
	

	  
	  




const AvailableStores = () => {
	const storeData = async (item) => {
		console.log('I Am Asynced')
		try {
			const jsonValue = JSON.stringify(item)
			await AsyncStorage.setItem('1', jsonValue)
		  
		  
		} catch (error) {
		  // Error saving data
		}
		navigation.navigate('Product')
	  };

	const [mounted, setMounted] = useState(false)
	const [Data, setData] = useState()
	const navigation = useNavigation();
	const [Indicator,setIndicator]= useState(true)
	const [FilterData, setFilterData] = useState()
	const [search, setSearch] = useState('')
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

	



	useEffect(() =>{
		fetch('https://communityhealth.ae/api/v1/products')
				.then((response) => response.json())
				.then((json) => {
					//   return json.movies;
					setData(json.data);
					setIndicator(false)
					setFilterData(json.data)
					
					console.log('I Am Will Mount')
				})
				.catch((error) => {
					console.error(error);
				});
	  },[])


	  const searchFilter=(text)=>{

		if (text){
			const newData = Data.filter((item)=>{
				const itemData = item.name ? item.name.toString().toUpperCase():
				''.toString().toUpperCase();
				const textData = text.toUpperCase();
				return itemData.indexOf(textData)>-1;


			}
			)
			setFilterData(newData)
			setSearch(text)

		}
		else{
			setFilterData(Data)
			setSearch(text)
		}

	  }


	  const searchContactByName = () => {
		var shortList = Data.filter(item => item.name === search);
		setFilterData(shortList)
		
	  };




	return (
	  <>
		<SafeAreaView style={{ flex: 1, justifyContent: 'space-between', marginBottom:'20%'}}>
				<TransparentHeader title="Shop Medical Products" />
					<View style={{alignItems:'center',position:'relative',flexDirection:'row'}}>
				<TextInput placeholder="Shop Medical Products" placeholderTextColor={Colors.gray}
				onChange={(text)=>{setSearch(text)}}
           style={{
        height: 50,
        width: '95%',
        backgroundColor:Colors.white,
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY_02_4,
        paddingLeft: '2%',
        marginVertical: '4%',
        borderRadius: 5,
		elevation:10,
        marginHorizontal: '2%',
		alignSelf:'center'


    }}> 
	
	</TextInput>
	<TouchableOpacity onPress={()=>{searchContactByName}}>
	<Feather name="search" size={25} color={primaryColor} style={{right:'150%'}}/></TouchableOpacity>
	</View>
	
	
	<View>

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
										storeData(item)
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
											<Image style={{ width: '100%', height: 120 }} source={{uri:'https://communityhealth.ae/public/' + item.thumbnail_image} }/>
										</View>
									</View>
									<View
										style={{
											zIndex: 10,
											marginTop:'3%',
											width: '90%',
											left: '5%',
											justifyContent: 'space-between'
										}}
									>
										<Text
											style={{
												fontSize: 14,
												marginTop: '5%',
												fontWeight: '700',
												color: Colors.black
											}}
										>
											{item.name}
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
										<Text style={{ fontSize: 13, fontWeight: '700', color: Colors.green,alignSelf:'center' }}>
											{'AED  '+ item.base_price}
										</Text>
										</View>
									</View>
								</TouchableOpacity>
								
							</View>
							);
						}}
						data={Data}
					/>
					<ActivityIndicator animating={Indicator} color={primaryColor} size={50} />
				</View>
				<View />
			</SafeAreaView>
	  </>
	);
  };
  
  export default AvailableStores;