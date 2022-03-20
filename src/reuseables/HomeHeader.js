import React from "react";
import { useNavigation } from "@react-navigation/native";
// import styles from "./styles";
import { Text, View, TouchableOpacity,Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { Colors, primaryColor, secondryColor } from "../utils/Styles";
// import { Colors } from "../../../Theme";
// import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function HomeHeader({ title = "", isIcon }) {
  const navigation = useNavigation();

  return (
    <View style={{width:'100%',height:'10%',flexDirection:'row' ,justifyContent:'space-between', elevation:20,backgroundColor:Colors.white,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
				{/* <Image style={{resizeMode:'contain',height:'100%',width:'25%' }} source={require('../assets/images/Logo.png')} /> */}
				<TouchableOpacity onPress={() => {navigation.navigate('Cart')}} style={{height:'100%',width:'20%',alignItems:'center',justifyContent:'center'}}>
				<Feather name="heart" size={30} color={primaryColor} style={{alignSelf:'center'}}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>(navigation.navigate('MapScreen'))}>
                <View style={{flexDirection:'row' ,justifyContent:'space-evenly', top:20}}>
				<Text style={{color:Colors.black, fontSize:16,fontWeight:'bold',alignSelf:'center'}}>Delivering To</Text>
				<Image style={{resizeMode:'contain',height:'100%',width:'20%',borderRadius:5 }} source={require('../assets/images/flag.png')} />
                </View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {navigation.navigate('Cart')}} style={{height:'100%',width:'20%',alignItems:'center',justifyContent:'center'}}>
				<Feather name="shopping-cart" size={30} color={primaryColor} style={{alignSelf:'center'}}/>
				</TouchableOpacity>
				</View>
  );
}

export default HomeHeader;
