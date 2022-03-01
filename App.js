import React, { Component, useState, useEffect } from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// Auth_Screens
import Splash from './src/auth_screens/Splash';
import OnBoardingScreens from './src/auth_screens/OnBoardingScreens';
import Login from './src/auth_screens/Login';
import SignUp from './src/auth_screens/SignUp';
import ForgotPassword from './src/auth_screens/ForgotPassword';
import OTPScreen from './src/auth_screens/OTPScreen';
import CreateNewPassword from './src/auth_screens/CreateNewPassword';
import WelcomeScreen from './src/auth_screens/WelcomeScreen';
import Congrats from './src/auth_screens/Congrats';
import NotAvailable from './src/auth_screens/NotAvailable';
// Home_Screens
import CommunityHomeScreen from './src/home_screens/CommunityHomeScreen';
import AvailableStores from './src/home_screens/AvailableStores.js';
import MechanicView from './src/reuseables/MechanicView';
import MechanicInfo from './src/home_screens/MechanicInfo';
import BookingMechanic from './src/home_screens/BookingMechanic';
// Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
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
		component={CommunityHomeScreen}
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
				{/* <Stack.Screen name="OnBoardingScreens" component={OnBoardingScreens} /> */}
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="OTPScreen" component={OTPScreen} />
				{/* <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} /> */}
				{/* <Stack.Screen name="Congrats" component={Congrats} /> */}
				{/* <Stack.Screen name="NotAvailable" component={NotAvailable} /> */}
				<Stack.Screen name="Home" component={MyBottomTabs} />
				<Stack.Screen name="AvailableStores" component={AvailableStores} />
				{/* <Stack.Screen name="MechanicView" component={MechanicView} /> */}
				{/* <Stack.Screen name="MechanicInfo" component={MechanicInfo} /> */}
				<Stack.Screen name="ShoppingForm" component={ShoppingForm} />
				{/* <Stack.Screen name="BookingMechanic" component={BookingMechanic} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;