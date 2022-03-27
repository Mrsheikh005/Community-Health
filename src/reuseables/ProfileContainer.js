import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ProfileContainer = (props) => {
    return (
        <TouchableOpacity style={[{ borderColor: props.borderColor, borderWidth: 1, borderRadius: 4, marginVertical:10,backgroundColor:'red',marginHorizontal:props.marginHorizontal}]} onPress={props.onPress}>
            <View style={{padding:props.padding,flexDirection: 'row',alignItems:'center',}}>
                <Image source={props.icon} />
                <Text style={[styles.text, { color: 'black',fontWeight:'bold' }]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center',justifyContent:'center'},
    text: { marginHorizontal: 10, fontSize: 19,textAlign:'center' }
})
export default ProfileContainer;