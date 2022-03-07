import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from './style'
import { Colors, secondryColor } from "../../utils/Styles";
import {RadioButton} from 'react-native-paper';
import Btn1 from "../../reuseables/Btn1";
import TransparentHeader from "../../reuseables/TransparentHeader/TransparentHeader";
// import TransparentHeader from "../../Components/NavigationHeader/TransparentHeader/TransparentHeader";
// import PlusIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
// import { ButtonComponent } from "../../Components";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { Fonts, Colors } from "../../Theme";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField1 from "../../reuseables/InputField1";
// import { InputField } from "../../reuseables/InputField";
// import ImagePicker from 'react-native-image-crop-picker';
const InsuranceForm = () => {
    const [checked, setChecked] = React.useState('');
    const [checked1, setChecked1] = React.useState('');
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'I just want the minimum legal cove', value: '1'},
    {label: 'I want more than just the minimum cover', value: '2'},
    {label: 'I am not sure, Just show me everything', value: '3'}
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Parent', value: '1'},
    {label: 'Child', value: '2'},
    {label: 'Spouse', value: '3'}
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Other', value: '3'}
  ]);
   
    

    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: Colors.white,flex:1,paddingBottom:'4%' }}>
            <TransparentHeader title={'Fill The Form'} />
            <ScrollView style={{paddingBottom:'4%'}}showsVerticalScrollIndicator={false}>

                <View style={styles.Maincontainer}>
                    <View>
                        <Text style={styles.HeaderHeading}>
                        Need health insurance for family? Great! Let's get started
                        </Text>
                    </View>

                    <View style={styles.Container3}>
                       
                        
                       <InputField1 
                       label="What's Your Full Name"
                        placeholder="eg. john doe"
                        // keyboardType="email-address"
                        />
                        <InputField1 
                        label="Which emirates is your visa issued from?"
                        placeholder="City"
                        // keyboardType="email-address"
                        />

                        <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>When do you want to start your insurance?</Text>
                        
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>
                        <TextInput keyboardType="numeric" placeholder="DD" placeholderTextColor={Colors.gray} style={styles.ContainerStyle1}></TextInput>
                        <TextInput keyboardType="numeric" placeholder="MM" placeholderTextColor={Colors.gray} style={styles.ContainerStyle1}></TextInput>
                        <TextInput keyboardType="numeric" placeholder="YY" placeholderTextColor={Colors.gray} style={styles.ContainerStyle1}></TextInput>

                        </View>
                        
                        <InputField1 
                        label="What's your phone number?"
                        placeholder="eg.0568524418"
                        keyboardType="numeric"
                        />
                        <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Is your salary more than AED 4,000 per month? </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        </View>
                        <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Do you need insurance for yourself? </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked1 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked1('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked1 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked1('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        <Text style={styles.HeadingText}>Do you need insurance for yourself? </Text>
                        <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.ContainerStyle}
                        dropDownDirection="TOP"
                        placeholder="Select One Option"
                        textStyle={styles.MostSellingProductsQuantity}
                        dropDownContainerStyle={styles.ContainerLast}
                        />
                        </View>
                        
                        <View style={{backgroundColor:"#bce5f7",marginVertical:'5%',paddingVertical:'2%'}}>
                        <Text style={styles.HeaderHeading}>
                        Person Info
                        </Text>
                        <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>What's their relationship to you? </Text>
                        <DropDownPicker
                        open={open1}
                        value={value1}
                        items={items1}
                        setOpen={setOpen1}
                        setValue={setValue1}
                        setItems={setItems1}
                        style={styles.ContainerStyleL}
                        dropDownDirection="TOP"
                        placeholder="Select One Option"
                        textStyle={styles.MostSellingProductsQuantity}
                        dropDownContainerStyle={styles.ContainerLast2}
                        />
                        <Text style={styles.HeadingText}>Please select member's date of birth? </Text>
                       
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>
                        <TextInput keyboardType="numeric" placeholder="DD" placeholderTextColor={Colors.gray} style={styles.ContainerStyle1}></TextInput>
                        <TextInput keyboardType="numeric" placeholder="MM" placeholderTextColor={Colors.gray} style={styles.ContainerStyle1}></TextInput>
                        <TextInput keyboardType="numeric" placeholder="YY" placeholderTextColor={Colors.gray} style={styles.ContainerStyle1}></TextInput>

                        </View>
                        <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>What's their gender? </Text>
                        <DropDownPicker
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                        style={styles.ContainerStyleL}
                        dropDownDirection="TOP"
                        placeholder="Select One Option"
                        textStyle={styles.MostSellingProductsQuantity}
                        dropDownContainerStyle={styles.ContainerLast2}
                        />
                       
                        </View>
                    </View>
                    </View>
                   
                </View>

            </ScrollView>
            <Btn1 lable={"One More Step"} onPress={() => navigation.navigate('Insurance2')} containerStyle={{backgroundColor:secondryColor}} lableStyle={{color:Colors.white,fontSize: 14,fontWeight: '700'}}/>
        </SafeAreaView>
    )
}
export default InsuranceForm