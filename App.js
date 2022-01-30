import { Text, View } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/auth_screens/Splash';
import OnBoardingScreens from './src/auth_screens/OnBoardingScreens';
import Login from './src/auth_screens/Login';
import SignUp from './src/auth_screens/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

  const App = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
  
    useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true'); 
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      }); 
    
    }, []);
  
    if (isFirstLaunch === null) {
      return null; 
    } else if (isFirstLaunch == true) {
      routeName = 'OnBoardingScreens';
    } else {
      routeName = 'Login';
    }
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="OnBoardingScreens" component={OnBoardingScreens} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
		</NavigationContainer>
	);

  }
export default App;

