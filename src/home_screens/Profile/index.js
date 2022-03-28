import React, { useState } from "react";
import { ImageBackground, SafeAreaView, TouchableOpacity, Text, ScrollView, View, FlatList, Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors, primaryColor } from "../../utils/Styles";
import { Avatar } from "react-native-elements";
import Btn1 from "../../reuseables/Btn1";
import PrefHandler from "../../data/PrefHandler";
import Icon from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-crop-picker';
const pickIcon = async () => {
    const image = await pickImageFromGallery()
    image && setIcon(image?.uri);
};

const pickImageFromGallery = async (aspect = [1, 1]) => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: aspect,
        quality: 1,
    });
    if (!result) return null;
    const manipResult = await ImageManipulator.manipulateAsync(
        result.uri,
        [{resize: {width: 800}}],
        {compress: 0.6, format: ImageManipulator.SaveFormat.JPEG}
    );
    return manipResult;
}

const Profile = (props) => {
    const navigation = useNavigation();
    let pref= new PrefHandler();
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <SafeAreaView />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>{pickImageFromGallery()}}>
                       
                    <Avatar
                        
                        containerStyle={styles.avatar}
                        size={100}
                        rounded
                        source={{
                            uri: "https://uifaces.co/our-content/donated/6MWH9Xi_.jpg",
                        }}
                    />
                     <Icon name="camera" size={30} style={{marginLeft:'14%',marginTop:'-11%'}}/>
                    </TouchableOpacity>
                    <Text style={styles.ProfileName}>John Doe</Text>
                    <Text style={styles.ProfileEmail}>John@example.com</Text>
                </View>
                
                <View style={styles.AccountSection}>
                    <Text style={styles.AccountSectionHeading} onPress={()=>{navigation.navigate('MyAccount')}}>My Account</Text>
                    <TouchableOpacity style={styles.AccountSectionInformation} onPress={()=>{navigation.navigate('OrderHistory')}}>
                        <Text style={styles.InformationSectionHeading}>Order History</Text>
                        <View style={styles.SubSectionStyling}>
                            
                            <View>
                                <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.AccountSectionInformation} >
                        <Text style={styles.InformationSectionHeading}>My Wishtlist</Text>
                        <View>
                            <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.AccountSectionInformation}>
                        <Text style={styles.InformationSectionHeading}>Track Orders</Text>
                        <View style={styles.SubSectionStyling}>
                            
                            <View>
                                <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.GeneralSection}>
                    <Text style={styles.AccountSectionHeading}>General</Text>
                    <TouchableOpacity style={styles.AccountSectionInformation} onPress={()=>{navigation.navigate('Terms')}}>
                        <Text style={styles.InformationSectionHeading}>Terms & Conditions</Text>
                        <View>
                            <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.AccountSectionInformation} onPress={()=>{navigation.navigate('Return')}}>
                        <Text style={styles.InformationSectionHeading}>Return Policy</Text>
                        <View>
                            <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.AccountSectionInformation} onPress={()=>{navigation.navigate('Support')}}>
                        <Text style={styles.InformationSectionHeading}>Support Policy</Text>
                        <View>
                            <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.AccountSectionInformation} onPress={()=>{navigation.navigate('Privacy')}}>
                        <Text style={styles.InformationSectionHeading}>Privacy Policy</Text>
                        <View>
                            <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.SupportSection}>
                    <Text style={styles.AccountSectionHeading}>Support</Text>
                    <TouchableOpacity style={styles.AccountSectionInformation}>
                        <Text style={styles.InformationSectionHeading}>Be A Seller</Text>
                        <View>
                            <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.AccountSectionInformation}>
                        <View style={styles.SubSectionStyling}>
                            <FontAwesome5 name="headphones-alt" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                            <Text style={styles.CustomerSupportHeading}>FAQs</Text>
                        </View>
                        <View>
                            <FontAwesome5 name="chevron-right" color={primaryColor} size={17} style={styles.MostSellingProductsIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Btn1 lable={"LogOut"} onPress={()=>{
                pref.deleteSession()
                console.log('I Am Logout')
                navigation.navigate('Login')
            }} lableStyle={{color:Colors.white,fontSize: 14,fontWeight: '700'}}/>
        </View>
    )
}
export default (Profile)