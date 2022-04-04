import React, { Component, useState, useEffect } from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// Auth_Screens
import Splash from '../auth_screens/Splash';
import ProgressBar from '../home_screens/ProgressBar';
import Login from '../auth_screens/Login';
import SignUp from '../auth_screens/SignUp';
import ForgotPassword from '../auth_screens/ForgotPassword';
import OTPScreen from '../auth_screens/OTPScreen';
import InsuranceForm2 from '../home_screens/InsuranceForm2';
import InsuranceForm from '../home_screens/InsuranceForm';
import Profile from '../home_screens/Profile';
// Home_Screens
import DoctorsInfo from '../home_screens/DoctorsInfo/DoctorsInfo';
import AvailableDoctors from '../home_screens/AvailableDoctors/Doctors';
import CommunityHomeScreen from '../home_screens/CommunityHomeScreen';
import AvailableStores from '../home_screens/AvailableStores.js';
import Product from '../home_screens/Product';
import Cosmetic_Offers from '../home_screens/Cosmetic_Offers';
import HealthCare from '../home_screens/HealthCare';
//MapScrren
import Mapscreen from '../home_screens/Mapscreen';

// Libraries

import ShoppingForm from '../home_screens/ShoppingForm';
import { Colors, secondryColor } from '../utils/Styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import JobPortal from '../home_screens/JobPortal';
import Medical_Eduction from '../home_screens/Medical_Eduction';
import Medical_Tourism from '../home_screens/Medical_Tourism';
import FeatureProduct from '../home_screens/FeatureProduct';
import MegaDeals from '../home_screens/MegaDeals';
//////Profile Screens
import MyAccount from '../home_screens/Profile_Screen_Info/MyAccount';
import Terms from '../home_screens/Profile_Screen_Info/Terms';
import PrivacyPolicy from '../home_screens/Profile_Screen_Info/PrivacyPolicy';
import ReturnPolicy from '../home_screens/Profile_Screen_Info/ReturnPolicy';
import OrderHistory from '../home_screens/Profile_Screen_Info/OrderHistory';
import Support from '../home_screens/Profile_Screen_Info/Support';
import HealthProviders from '../home_screens/HealthProviders';
// import AvailableSstores from './src/home_screens/AvailableStoresjs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function MyBottomTabs() {
	const [ text, setText ] = React.useState('');

	return (
		<Tab.Navigator
			initialRouteName="MyHome"
			backBehavior="initialRoute"
			activeColor={secondryColor}
			barStyle={{ backgroundColor: Colors.white, paddingBottom: 5 }}
		>
			<Tab.Screen
				name="MyHome"
				component={CommunityHomeScreen}
				options={{
					tabBarLabel: 'Categories',
					tabBarIcon: ({ color }) => <AntIcon name="home" color={color} size={23} />
				}}
			/>
			<Tab.Screen
				name="Featured"
				component={FeatureProduct}
				options={{
					tabBarLabel: 'Featured',
					tabBarIcon: ({ color }) => <AntIcon name="staro" color={color} size={23} />
				}}
			/>
			<Tab.Screen
				name="Deals"
				component={MegaDeals}
				options={{
					tabBarLabel: 'MegaDeals',
					tabBarIcon: ({ color }) => <AntIcon name="notification" color={color} size={23} />
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => <AntIcon name="user" color={color} size={23} />
				}}
			/>
		</Tab.Navigator>
	);
}

// const App = () => {

// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator screenOptions={{ headerShown: false }}>
// 				<Stack.Screen name="Splash" component={Splash} />

// 				<Stack.Screen name="Login" component={Login} />
// 				<Stack.Screen name="SignUp" component={SignUp} />
// 				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
// 				<Stack.Screen name="OTPScreen" component={OTPScreen} />
// 				<Stack.Screen name="Home" component={MyBottomTabs} />
// 				<Stack.Screen name="AvailableStores" component={AvailableStores} />
// 				<Stack.Screen name="AvailableDoctors" component={AvailableDoctors} />
// 				<Stack.Screen name="DoctorsInfo" component={DoctorsInfo} />
// 				<Stack.Screen name="Insurance" component={InsuranceForm} />
// 				<Stack.Screen name="Insurance2" component={InsuranceForm2} />
// 				<Stack.Screen name="Cart" component={ProgressBar} />
// 				<Stack.Screen name="ShoppingForm" component={ShoppingForm} />
// 				<Stack.Screen name="MapScreen" component={Mapscreen} />
// 				<Stack.Screen name="Product" component={Product} />
// 				<Stack.Screen name="JobPortal" component={JobPortal}/>
// 				<Stack.Screen name="Medical_Eduction" component={Medical_Eduction}/>
// 				<Stack.Screen name="Medical_Tourism" component={Medical_Tourism}/>
// 				<Stack.Screen name="MyAccount" component={MyAccount}/>
// 				<Stack.Screen name="OrderHistory" component={OrderHistory}/>
// 				<Stack.Screen name="Terms" component={Terms}/>
// 				<Stack.Screen name="Support" component={Support}/>
// 				<Stack.Screen name="Privacy" component={PrivacyPolicy}/>
// 				<Stack.Screen name="Return" component={ReturnPolicy}/>
// 				<Stack.Screen name="Cosmetic_Offers" component={Cosmetic_Offers}/>
// 				<Stack.Screen name="HealthCare" component={HealthCare}/>
// 				<Stack.Screen name="HealthProviders" component={HealthProviders}/>
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// };
// export default App;

export class HomeStack extends Component {
	render() {
		return (
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Splash" component={Splash} />

				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="OTPScreen" component={OTPScreen} />
				<Stack.Screen name="Home" component={MyBottomTabs} />
				<Stack.Screen name="AvailableStores" component={AvailableStores} />
				<Stack.Screen name="AvailableDoctors" component={AvailableDoctors} />
				<Stack.Screen name="DoctorsInfo" component={DoctorsInfo} />
				<Stack.Screen name="Insurance" component={InsuranceForm} />
				<Stack.Screen name="Insurance2" component={InsuranceForm2} />
				<Stack.Screen name="Cart" component={ProgressBar} />
				<Stack.Screen name="ShoppingForm" component={ShoppingForm} />
				<Stack.Screen name="MapScreen" component={Mapscreen} />
				<Stack.Screen name="Product" component={Product} />
				<Stack.Screen name="JobPortal" component={JobPortal} />
				<Stack.Screen name="Medical_Eduction" component={Medical_Eduction} />
				<Stack.Screen name="Medical_Tourism" component={Medical_Tourism} />
				<Stack.Screen name="MyAccount" component={MyAccount} />
				<Stack.Screen name="OrderHistory" component={OrderHistory} />
				<Stack.Screen name="Terms" component={Terms} />
				<Stack.Screen name="Support" component={Support} />
				<Stack.Screen name="Privacy" component={PrivacyPolicy} />
				<Stack.Screen name="Return" component={ReturnPolicy} />
				<Stack.Screen name="Cosmetic_Offers" component={Cosmetic_Offers} />
				<Stack.Screen name="HealthCare" component={HealthCare} />
				<Stack.Screen name="HealthProviders" component={HealthProviders} />
			</Stack.Navigator>
		);
	}
}
export default HomeStack;
