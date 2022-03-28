import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'
import TransparentHeader from '../../reuseables/TransparentHeader/TransparentHeader';
import ProfileContainer from '../../reuseables/ProfileContainer';
import { primaryColor,secondryColor } from '../../utils/Styles';
import ICON from 'react-native-vector-icons/AntDesign'
export default class MyAccount extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#FDFEFE'}}>
          <TransparentHeader title='Profile'/>
          <View style={{marginVertical:'15%'}}>
          <View style={styles.ViewStyle}>
          <Text style={styles.TextView}>My Personal Information</Text></View>
          <ProfileContainer borderColor={primaryColor} title={'Name'} padding={'6%'} marginHorizontal={'2%'}/>
          <ProfileContainer borderColor={primaryColor} title={'Email'} padding={'6%'} marginHorizontal={'2%'}/>
          <ProfileContainer borderColor={primaryColor} title={'Phone number'} padding={'6%'} marginHorizontal={'2%'}/>
          <ProfileContainer borderColor={primaryColor} title={'Address'} padding={'8%'} marginHorizontal={'2%'}/>
          </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  TextView:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'

  },
  ViewStyle:{
    marginLeft:'3%',
    
  }
})