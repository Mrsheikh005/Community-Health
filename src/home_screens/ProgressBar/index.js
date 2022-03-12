import React, { useState } from 'react';
import {
	Alert,
	SafeAreaView,
	TouchableOpacity,
	Text,
	ScrollView,
	View,
	TextInput,
	Image
} from 'react-native';
import styles from './style';
import Icons from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
// import {ButtonComponent} from '../../../Components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, primaryColor, secondryColor, container, headings } from '../../utils/Styles';
import Btn1 from '../../reuseables/Btn1';
import Feather from 'react-native-vector-icons/Feather';
// import TransparentHeader from '../../../Components/NavigationHeader/TransparentHeader/TransparentHeader';
import { RadioButton } from 'react-native-paper';
// import CountryPicker from 'rn-country-dropdown-picker';
import PlusIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ProgressBar = (props) => {
	const [ checked, setChecked ] = React.useState('first');

	const [ selectCategory, setselectCategory ] = useState(0);
	const [ num, setNum ] = useState(0);
	const entries = [
		{
			id: '1',
			title: 'Shipping'
		},
		{
			id: '2',
			title: 'Payment'
		},
		{
			id: '3',
			title: 'Card Details'
		},
		{
			id: '4',
			title: 'Review'
		}
	];

	const navigation = useNavigation();
	// const Back = navigation.goBack();
	//   const [Num,setNum]=useState('');
	const SelectCategoryf = (param) => {
		console.log('index is=', param);
		// setNum(param);
		switch (param) {
			case 0:
				return (
					////////////////////////My Cart S1////////////////////////
					<View style={styles.InnerView}>
					
						<View
							style={{
								width: '100%',
								height: '8%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: '2%'
							}}
						>
							<Image
								style={{ resizeMode: 'contain', height: '100%', width: '25%' }}
								source={require('../../assets/images/Logo.png')}
							/>
							<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
								<Image
									style={{ resizeMode: 'contain', height: '100%', width: '20%', borderRadius: 5 }}
									source={require('../../assets/images/flag.png')}
								/>
								<Text
									style={{
										color: secondryColor,
										fontSize: 14,
										fontWeight: 'bold',
										alignSelf: 'center',
										width: '30%'
									}}
								>
									Deliver To UAE
								</Text>
							</View>
							<View
								style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}
							>
								<Feather
									name="shopping-cart"
									size={30}
									color={secondryColor}
									style={{ alignSelf: 'center' }}
								/>
							</View>
						</View>
						<ScrollView>
							<View style={{ marginHorizontal:'5%',marginVertical:'10%',flexDirection: 'row', justifyContent:"space-between"}}>
								<Feather name="shopping-cart" size={25} color={Colors.green}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/>
                <Feather name="map" size={25} color={Colors.gray} /> 
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="truck" size={25} color={Colors.gray}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="credit-card" size={25} color={Colors.gray}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="check-circle" size={25} color={Colors.gray}/> 
							</View>
							<View style={{ left: '5%' }}>
								<Text style={styles.Headings}>My Cart</Text>
							</View>
							<View style={styles.MostSellingProductsDescriptionSection0}>
												<Text style={styles.MostSellingProductsDescription}>
													This is the Heading and the Details of the Product available here
												</Text>
												<View style={styles.OrderListPriceAndLabelSection}>
													<Text style={styles.MostSellingProductsQuantity1}>$105</Text>
													<View style={{ flexDirection: 'row' }}>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="minus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
														<Text style={styles.OrderListPrice}>2</Text>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="plus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
													</View>
												</View>
											</View>
                      <View style={styles.MostSellingProductsDescriptionSection0}>
												<Text style={styles.MostSellingProductsDescription}>
													This is the Heading and the Details of the Product available here
												</Text>
												<View style={styles.OrderListPriceAndLabelSection}>
													<Text style={styles.MostSellingProductsQuantity1}>$105</Text>
													<View style={{ flexDirection: 'row' }}>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="minus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
														<Text style={styles.OrderListPrice}>2</Text>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="plus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
													</View>
												</View>
											</View>
                      <View style={styles.MostSellingProductsDescriptionSection0}>
												<Text style={styles.MostSellingProductsDescription}>
													This is the Heading and the Details of the Product available here
												</Text>
												<View style={styles.OrderListPriceAndLabelSection}>
													<Text style={styles.MostSellingProductsQuantity1}>$105</Text>
													<View style={{ flexDirection: 'row' }}>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="minus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
														<Text style={styles.OrderListPrice}>2</Text>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="plus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
													</View>
												</View>
											</View>

							
              
						</ScrollView>
						{/* <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',}}> */}
						<Btn1
							lableStyle={{ ...headings.h6M, color: Colors.white }}
							lable={'Proceed'}
							onPress={() => setselectCategory(1)}
						/>
						
					</View>
				);
			case 1:
				return (
					////////////////////////Shipping Info S2////////////////////////
					<View style={styles.InnerView}>
						<View
							style={{
								width: '100%',
								height: '8%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: '2%'
							}}
						>
							<Image
								style={{ resizeMode: 'contain', height: '100%', width: '25%' }}
								source={require('../../assets/images/Logo.png')}
							/>
							<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
								<Image
									style={{ resizeMode: 'contain', height: '100%', width: '20%', borderRadius: 5 }}
									source={require('../../assets/images/flag.png')}
								/>
								<Text
									style={{
										color: secondryColor,
										fontSize: 14,
										fontWeight: 'bold',
										alignSelf: 'center',
										width: '30%'
									}}
								>
									Deliver To UAE
								</Text>
							</View>
							<View
								style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}
							>
								<Feather
									name="shopping-cart"
									size={30}
									color={secondryColor}
									style={{ alignSelf: 'center' }}
								/>
							</View>
						</View>
            <ScrollView>
            <View style={{ marginHorizontal:'5%',marginVertical:'10%',flexDirection: 'row', justifyContent:"space-between"}}>
								<Feather name="shopping-cart" size={25} color={Colors.green} onPress={() => setselectCategory(0)}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/>
                <Feather name="map" size={25} color={Colors.green} /> 
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="truck" size={25} color={Colors.gray}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="credit-card" size={25} color={Colors.gray}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="check-circle" size={25} color={Colors.gray}/> 
							</View>
              <View style={{ left: '5%' }}>
								<Text style={styles.Headings}>Shipping info</Text>
							</View>
						{/* <View style={styles.cartImage}>
              <Image
                source={require('../../../Theme/Images/ProgressHeader.png')}
                resizeMode="contain"
                style={styles.HeaderImage}
              />
            </View> */}
            <View style={styles.spacings}>
								<Text style={{ color: secondryColor, fontSize: 14, fontWeight: 'bold' }}>
									Full Name
								</Text>
							</View>
							<View style={{}}>
								<TextInput style={styles.ContainerStyle} />
							</View>
							<View style={styles.spacings}>
								<Text style={{ color: secondryColor, fontSize: 14, fontWeight: 'bold' }}>
									Street Address
								</Text>
							</View>
							<View style={{}}>
								<TextInput style={styles.ContainerStyle} />
							</View>
							<View style={styles.spacings}>
								<Text style={{ color: secondryColor, fontSize: 14, fontWeight: 'bold' }}>
									Apt/Suit/Block
								</Text>
							</View>
							<View style={{}}>
								<TextInput style={styles.ContainerStyle} />
							</View>
							<View style={styles.spacings}>
								<Text style={styles.Headings2}>City</Text>
							</View>
							<View style={{}}>
								<TextInput style={styles.ContainerStyle} />
							</View>
							<View style={styles.spacings}>
								<Text style={{ color: secondryColor, fontSize: 14, fontWeight: 'bold' }}>
									Postal Code
								</Text>
							</View>
							<View style={{}}>
								<TextInput style={styles.ContainerStyle} />
							</View>
						</ScrollView>
						{/* <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',}}> */}
						<Btn1
							lableStyle={{ ...headings.h6M, color: Colors.white }}
							lable={'Proceed'}
							onPress={() => setselectCategory(2)}
						/>
					
					</View>
				);
			case 2:
				return (
					////////////////////////Delivery Info S3////////////////////////
					<View style={styles.InnerView}>
						<View
							style={{
								width: '100%',
								height: '8%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: '2%'
							}}
						>
							<Image
								style={{ resizeMode: 'contain', height: '100%', width: '25%' }}
								source={require('../../assets/images/Logo.png')}
							/>
							<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
								<Image
									style={{ resizeMode: 'contain', height: '100%', width: '20%', borderRadius: 5 }}
									source={require('../../assets/images/flag.png')}
								/>
								<Text
									style={{
										color: secondryColor,
										fontSize: 14,
										fontWeight: 'bold',
										alignSelf: 'center',
										width: '30%'
									}}
								>
									Deliver To UAE
								</Text>
							</View>
							<View
								style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}
							>
								<Feather
									name="shopping-cart"
									size={30}
									color={secondryColor}
									style={{ alignSelf: 'center' }}
								/>
							</View>
						</View>
            <View style={{ marginHorizontal:'5%',marginVertical:'10%',flexDirection: 'row', justifyContent:"space-between"}}>
								<Feather name="shopping-cart" size={25} color={Colors.green} onPress={() => setselectCategory(0)}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/>
                <Feather name="map" size={25} color={Colors.green} onPress={() => setselectCategory(1)}/> 
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="truck" size={25} color={Colors.green}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="credit-card" size={25} color={Colors.gray}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="check-circle" size={25} color={Colors.gray}/> 
							</View>
						
						<ScrollView>
            <View style={{ left: '5%', marginTop: '5%' }}>
							<Text style={styles.Headings}>Delivery info</Text>
						</View>

						<View style={{ marginTop: '10%', height: '100%', flex: 1 }}>
							<View style={styles.RadioButton}>
								<View style={{ flexDirection: 'row' }}>
									<RadioButton
										value="first"
										status={checked === 'first' ? 'checked' : 'unchecked'}
										onPress={() => setChecked('first')}
									/>
									<Text style={styles.Inner}>Home Delivery</Text>
								</View>
								
							</View>
							<View style={styles.RadioButton}>
								<View style={{ flexDirection: 'row' }}>
									<RadioButton
										value="second"
										status={checked === 'second' ? 'checked' : 'unchecked'}
										onPress={() => setChecked('second')}
									/>
									<Text style={styles.Inner}>PickUp</Text>
								</View>
							
							</View>
							<View style={styles.MostSellingProductsSection1}>
								<Text style={styles.MostSellingProductsQuantity}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id adipiscing sed id
									ornare. Felis, tincidunt id venenatis, elit eget urna mattis. Feugiat turpis diam
									fames eu, etiam mauris. Massa laoreet nunc dui vestibulum eget felis, eu enim,
									viverra.
								</Text>
							</View>
						</View>

						
							
						</ScrollView>
						<Btn1
							lableStyle={{ ...headings.h6M, color: Colors.white }}
							lable={'Proceed'}
							onPress={() => setselectCategory(3)}
						/>
						
					</View>
				);
			case 3:
				return (
					////////////////////////Choose your Payment S4////////////////////////             ///////////You can Replace this with the latest one
					<View style={styles.InnerView}>
						<View
							style={{
								width: '100%',
								height: '8%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: '2%'
							}}
						>
							<Image
								style={{ resizeMode: 'contain', height: '100%', width: '25%' }}
								source={require('../../assets/images/Logo.png')}
							/>
							<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
								<Image
									style={{ resizeMode: 'contain', height: '100%', width: '20%', borderRadius: 5 }}
									source={require('../../assets/images/flag.png')}
								/>
								<Text
									style={{
										color: secondryColor,
										fontSize: 14,
										fontWeight: 'bold',
										alignSelf: 'center',
										width: '30%'
									}}
								>
									Deliver To UAE
								</Text>
							</View>
							<View
								style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}
							>
								<Feather
									name="shopping-cart"
									size={30}
									color={secondryColor}
									style={{ alignSelf: 'center' }}
								/>
							</View>
						</View>
						
<View style={{ marginHorizontal:'5%',marginVertical:'10%',flexDirection: 'row', justifyContent:"space-between"}}>
								<Feather name="shopping-cart" size={25} color={Colors.green} onPress={() => setselectCategory(0)}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/>
                <Feather name="map" size={25} color={Colors.green} onPress={() => setselectCategory(1)}/> 
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="truck" size={25} color={Colors.green} onPress={() => setselectCategory(2)}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="credit-card" size={25} color={Colors.green}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="check-circle" size={25} color={Colors.gray}/> 
							</View>

						<ScrollView>
            <View style={{ left: '5%', marginTop: '5%' }}>
								<Text style={styles.Headings}>Choose Your Payment Method</Text>
							</View>

							<View style={{}}>
								<View style={styles.RadioContainer}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<RadioButton
											value="first"
											status={checked === 'first' ? 'checked' : 'unchecked'}
											onPress={() => setChecked('first')}
										/>
										<Text
											style={{
												color: 'black',
												fontSize: 14,
												fontWeight: 'bold'
											}}
										>
											Cash on Delivery
										</Text>
									</View>
									
								</View>
                <View style={styles.RadioContainer}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<RadioButton
											value="second"
											status={checked === 'second' ? 'checked' : 'unchecked'}
											onPress={() => setChecked('second')}
										/>
										<Text
											style={{
												color: 'black',
												fontSize: 14,
												fontWeight: 'bold'
											}}
										>
											Pay Here
										</Text>
									</View>
									
								</View>
								

								
							</View>
							
						</ScrollView>
						
						<Btn1
							lableStyle={{ ...headings.h6M, color: Colors.white }}
							lable={'Proceed'}
							onPress={() => setselectCategory(4)}
						/>
						
					</View>
				);
        case 4:
				return (
					////////////////////////Confirm Order S5////////////////////////             ///////////You can Replace this with the latest one
					<View style={styles.InnerView}>
						<View
							style={{
								width: '100%',
								height: '8%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: '2%'
							}}
						>
							<Image
								style={{ resizeMode: 'contain', height: '100%', width: '25%' }}
								source={require('../../assets/images/Logo.png')}
							/>
							<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
								<Image
									style={{ resizeMode: 'contain', height: '100%', width: '20%', borderRadius: 5 }}
									source={require('../../assets/images/flag.png')}
								/>
								<Text
									style={{
										color: secondryColor,
										fontSize: 14,
										fontWeight: 'bold',
										alignSelf: 'center',
										width: '30%'
									}}
								>
									Deliver To UAE
								</Text>
							</View>
							<View
								style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}
							>
								<Feather
									name="shopping-cart"
									size={30}
									color={secondryColor}
									style={{ alignSelf: 'center' }}
								/>
							</View>
						</View>
						
<View style={{ marginHorizontal:'5%',marginVertical:'10%',flexDirection: 'row', justifyContent:"space-between"}}>
								<Feather name="shopping-cart" size={25} color={Colors.green} onPress={() => setselectCategory(0)}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/>
                <Feather name="map" size={25} color={Colors.green} onPress={() => setselectCategory(1)}/> 
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="truck" size={25} color={Colors.green} onPress={() => setselectCategory(2)}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="credit-card" size={25} color={Colors.green} onPress={() => setselectCategory(3)}/>
                <Feather name="chevron-right" size={25} color={Colors.gray}/> 
                <Feather name="check-circle" size={25} color={Colors.green} /> 
							</View>

						<ScrollView>
							<View style={{ left: '5%', marginTop: '5%' }}>
								<Text style={styles.Headings}>Please Confirm And Submit Your Order</Text>
							</View>

							<View style={{ left: '2%', marginTop: '10%', flexDirection: 'row' }}>
								<View style={{ width: '80%' }}>
									<Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
										Shipping Addess
									</Text>
								</View>
								<TouchableOpacity
									style={{
										width: '16%',
										top: 2,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Change</Text>
								</TouchableOpacity>
							</View>
							<View style={{ left: '5%', marginTop: '6%' }}>
								<Text style={{ color: 'grey', fontSize: 15 }}>8 butik batok street 21 apt 21</Text>
								<Text style={{ color: 'grey', fontSize: 15 }}>Street 4 Block C USA</Text>
							</View>

							<View style={{ left: '2%', marginTop: '10%', flexDirection: 'row' }}>
								<View style={{ width: '80%' }}>
									<Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
										Payment Method
									</Text>
								</View>
								<TouchableOpacity
									style={{
										width: '16%',
										top: 2,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Change</Text>
								</TouchableOpacity>
							</View>
							<View style={{ left: '5%', marginTop: '6%', flexDirection: 'row' }}>
								<Icons size={15} name="mastercard" color="black" style={{ position: 'absolute' }} />
								<Text style={{ left: 25, color: 'grey', fontSize: 15 }}> **** **** **** 1234</Text>
							</View>
							<View style={{ left: '2%', marginTop: '10%', flexDirection: 'row' }}>
								<View style={{ width: '80%' }}>
									<Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
										Billing Address
									</Text>
								</View>
								<TouchableOpacity
									style={{
										width: '16%',
										top: 2,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Change</Text>
								</TouchableOpacity>
							</View>
							<View style={{ marginTop: '5%', flexDirection: 'row' }}>
								<Text style={{ left: 25, color: 'grey', fontSize: 14 }}>Same As Shipping Address</Text>
							</View>
							<View style={{ left: '2%', marginTop: '10%', flexDirection: 'row' }}>
								<View style={{ width: '80%' }}>
									<Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Items</Text>
								</View>
								<TouchableOpacity
									style={{
										width: '16%',
										top: 2,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Change</Text>
								</TouchableOpacity>
							</View>
							<View style={{ marginLeft: '1%', marginTop: '5%' }}>
								<View style={{ flex: 1, marginVertical: '5%' }}>
									<View style={styles.MostSellingProductsSection}>
										<View style={{ flexDirection: 'row' }}>
											
											<View style={styles.MostSellingProductsDescriptionSection}>
												<Text style={styles.MostSellingProductsDescription}>
													This is the Heading and the Details of the Product available here
												</Text>
												<View style={styles.OrderListPriceAndLabelSection}>
													<Text style={styles.MostSellingProductsQuantity1}>$105</Text>
													<View style={{ flexDirection: 'row' }}>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="minus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
														<Text style={styles.OrderListPrice}>2</Text>
														<TouchableOpacity style={styles.Bottons}>
															<PlusIcon
																name="plus"
																size={15}
																style={{
																	marginTop: '5%',
																	color: 'black'
																}}
															/>
														</TouchableOpacity>
													</View>
												</View>
											</View>
										</View>
									</View>
								</View>
							</View>
						</ScrollView>
						{/* <View style={{backgroundColor:'red'}}> */}
						<Btn1
							lableStyle={{ ...headings.h6M, color: Colors.white }}
							lable={'Confirm'}
							onPress={() =>Alert.alert(
                "Order Info",
                "Order Successfully Placed with Order ID#xxxxxxxx",
                [
                  {
                    text: "Back To Home",
                    onPress: () => navigation.navigate('Home'),
                    style: "cancel",
                  },
                ],
                
              )}
						/>
						
					</View>
				);
			default:
				return navigation.goBack();
		}
	};

	return (
		/////////////////////Main Header////////////////////////////
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			

			{SelectCategoryf(selectCategory)}
		</View>
	);
};

export default ProgressBar;
