import { Text, View,StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Arrow from 'react-native-vector-icons/AntDesign'
import SwitchSelector from "react-native-switch-selector";
import HireNow from './HireNow';
const options = [
    { label: "Schedule", value: "1" },
    { label: "Hire Now", value: "2" },
  ];
export default class BookingMechanic extends Component {
  render() {
    return (
        //Header//
      <SafeAreaView style={{flex:1}}>
          <View style={styles.HeaderView}>
          <TouchableOpacity>
          <Arrow name='arrowleft' size={25}/>
        </TouchableOpacity>   
          <Text style={styles.TextStyle}>Booking Bashir Mechanic</Text> 
        </View>
        <View>
        <SwitchSelector
  initial={0}
  textColor={'black'} //'#7a44cf'
  selectedColor={'#68397E'}
  buttonColor={'#68397E'}
  borderColor={'#68397E'}
  hasPadding
  options={[
    { label: "Schedule", value: "1",  }, //images.feminino = require('./path_to/assets/img/feminino.png')
    { label: "Hire Now", value: "2", } //images.masculino = require('./path_to/assets/img/masculino.png')
  ]}
  style={styles.switchstyle}
/>
<View style={{marginTop:'35%'}}>
<HireNow/>
</View>
</View>

        
      </SafeAreaView>
    )
  }
}
const styles=StyleSheet.create({
    HeaderView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:'25%',
        marginLeft:'4%',
        marginTop:'3%'


    },
    TextStyle:{
        fontSize:20
    },
    SwitchView:{
        borderRadius:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'8%',
        justifyContent:'space-between',
        marginLeft:'32%',
        marginRight:'32%'
        
    },
    switchstyle:{
        padding:'6%',
        // borderRadius:-20,
        // backgroundColor:'red'
        
    }


})