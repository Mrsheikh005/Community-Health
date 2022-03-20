import React, { Component, useState, useEffect } from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// Auth_Screens
import Splash from './src/auth_screens/Splash';
import ProgressBar from './src/home_screens/ProgressBar';
import Login from './src/auth_screens/Login';
import SignUp from './src/auth_screens/SignUp';
import ForgotPassword from './src/auth_screens/ForgotPassword';
import OTPScreen from './src/auth_screens/OTPScreen';
import InsuranceForm2 from './src/home_screens/InsuranceForm2';
import InsuranceForm from './src/home_screens/InsuranceForm';
import Profile from './src/home_screens/Profile';
// Home_Screens
import DoctorsInfo from './src/home_screens/DoctorsInfo/DoctorsInfo';
import AvailableDoctors from './src/home_screens/AvailableDoctors/Doctors';
import CommunityHomeScreen from './src/home_screens/CommunityHomeScreen';
import AvailableStores from './src/home_screens/AvailableStores.js';
import Product from './src/home_screens/Product';
//MapScrren
import Mapscreen from './src/home_screens/Mapscreen';

// Libraries

import ShoppingForm from './src/home_screens/ShoppingForm';
import { Colors, secondryColor } from './src/utils/Styles';
import AntIcon from "react-native-vector-icons/AntDesign";
// import AvailableSstores from './src/home_screens/AvailableStoresjs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyBottomTabs() {
	const [text, setText] = React.useState('');
	
  
	
  
	  
	return (
	  <Tab.Navigator
	  initialRouteName="MyHome"
	  backBehavior="initialRoute"
	  activeColor={secondryColor}
	  barStyle={{ backgroundColor: Colors.white, paddingBottom:  5, }}
	>
	  <Tab.Screen
		name="MyHome"
		component={CommunityHomeScreen}
		options={{
		  tabBarLabel: 'Categories',
		  tabBarIcon: ({ color }) => (
			<AntIcon name="home" color={color} size={23} />
		  ),
		}}
	  />
	  <Tab.Screen
		name="Featured"
		component={CommunityHomeScreen}
		options={{
		  tabBarLabel: 'Featured',
		  tabBarIcon: ({ color }) => (
			<AntIcon name="staro" color={color} size={23} />
		  ),
		}}
	  />
	  <Tab.Screen
		name="Deals"
		component={CommunityHomeScreen}
		options={{
		  tabBarLabel: 'MegaDeals',
		  tabBarIcon: ({ color }) => (
			<AntIcon name="notification" color={color} size={23} />
		  ),
		}}
	  />
	  <Tab.Screen
		name="Profile"
		component={Profile}
		options={{
		  tabBarLabel: 'Profile',
		  tabBarIcon: ({ color }) => (
			<AntIcon name="user" color={color} size={23} />
		  ),
		}}
	  />
	  
	  </Tab.Navigator>
	);
  }





const App = () => {
	
	return (
		<NavigationContainer>
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
				
				{/* <Stack.Screen name="BookingMechanic" component={BookingMechanic} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;




 