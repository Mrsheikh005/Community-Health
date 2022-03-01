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
const InsuranceForm2 = () => {
    const [checked23, setChecked23] = React.useState('');
    const [checked1, setChecked1] = React.useState('');
    const [checked2, setChecked2] = React.useState('');
    const [checked3, setChecked3] = React.useState('');
    const [checked4, setChecked4] = React.useState('');
    const [checked5, setChecked5] = React.useState('');
    const [checked6, setChecked6] = React.useState('');
    const [checked7, setChecked7] = React.useState('');
    const [checked8, setChecked8] = React.useState('');
    const [checked9, setChecked9] = React.useState('');
    const [checked10, setChecked10] = React.useState('');
    const [checked11, setChecked11] = React.useState('');
    const [checked12, setChecked12] = React.useState('');
    const [checked13, setChecked13] = React.useState('');
    const [checked14, setChecked14] = React.useState('');
    const [checked15, setChecked15] = React.useState('');
    const [checked16, setChecked16] = React.useState('');
    const [checked17, setChecked17] = React.useState('');
    const [checked18, setChecked18] = React.useState('');
    const [checked19, setChecked19] = React.useState('');
    const [checked20, setChecked20] = React.useState('');
    const [checked21, setChecked21] = React.useState('');
    const [checked22, setChecked22] = React.useState('');
    
    

    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: Colors.white,flex:1,paddingBottom:'4%' }}>
            <TransparentHeader title={'Fill The Form'} />
            <ScrollView style={{paddingBottom:'4%'}}showsVerticalScrollIndicator={false}>

                <View style={styles.Maincontainer}>
                    <View>
                        <Text style={styles.HeaderHeading}>
                        Declaration
                        </Text>
                        <Text style={styles.HeadingText3}>Please note that you must answer all questions, and answer them truthfully. Failure to do so may result in your policy being cancelled without notice. </Text>
                        <Text style={styles.HeadingText4}>Have you ever been diagnosed or received any treatment (including hospital or surgery) or felt any disorder or pain or had any symptoms indicating: </Text>
                    </View>

                    <View style={styles.Container3}>
                       
                        
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Diseases of the cardiovascular system incl. hypertension </Text>
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
                        </View>
                        <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Diseases of the respiratory system </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked2 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked2('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked2 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked2('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        </View>
                        <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Diseases of digestive system </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked3 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked3('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked3 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked3('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Diseases of genitourinary system, kidney diseases and breast disorders </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked4 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked4('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked4 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked4('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Osteoarticular & Muscular Diseases or Transplants or Disease of the skin and subcutaneous tissue </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked5 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked5('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked5 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked5('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Diseases of the nervous system and sense organs (ears, eyes, nose) </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked6 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked6('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked6 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked6('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Diseases of the endocrine system, nutritional-, metabolic diseases and immunity disorders, diabetes </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked7 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked7('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked7 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked7('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Neoplasms/Cancer (benign or malignant) </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked8 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked8('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked8 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked8('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Sexually Transmitted Diseases and AIDs </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked9 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked9('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked9 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked9('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Congenital anomalies, hereditary/genetic diseases </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked10 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked10('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked10 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked10('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Other Diseases, Accidents, Previous or Future operations you already know about </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked11 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked11('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked11 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked11('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Is the adherent following or has ever followed any medical treatment? Did or is he taking medication? </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked12 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked12('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked12 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked12('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Does the adherent have any allergy against any Drug, Food or other? </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked13 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked13('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked13 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked13('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Pregnant or trying to get pregnant, or any previous complications in pregnancy, childbirth or abortion </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked14 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked14('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked14 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked14('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Infectious and parasitic diseases </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked15 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked15('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked15 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked15('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Diseases of blood and blood forming organs </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked16 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked16('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked16 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked16('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>PMental-/psychiatric disorders </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked17 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked17('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked17 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked17('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Diseases of the musculoskeletal system and connective tissue </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked18 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked18('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked18 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked18('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Certain conditions originating in the perinatal period </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked19 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked19('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked19 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked19('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Injury and poisoning </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked20 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked20('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked20 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked20('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Previous medical/surgical hospitalisations, procedures and operations </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked21 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked21('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked21 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked21('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle}>
                        <Text style={styles.HeadingText}>Any (chronic) disease(s), symptoms and complaints not mentioned above </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked22 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked22('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked22 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked22('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    <View style={styles.InputStyle2}>
                        <Text style={styles.HeadingText}>Any Pre-existing disease(s), symptoms and complaints within the last ten years </Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                        <RadioButton
                    value="first"
                    status={checked23 === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked23('first')}
                    /> 
                  <Text style={styles.HeadingText2}>Yes</Text>
                  </View>
                  <View style={{marginHorizontal:'2%',flexDirection:'row'}}>
                  <RadioButton
                    value="second"
                    status={checked23 === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked23('second')}
                  />
                  <Text style={styles.HeadingText2}>No</Text>
                  </View>
                        </View>
                        
                        
                       
                        
                    </View>
                    </View>
                    <View>
                        <Text style={styles.HeadingText4}>I hereby declare and agree, with respect to both, myself and to my Dependants, that I am aware of the general terms of this insurance and I accept them. With the above, I authorise my doctor, health institution or other organisation or person that has any information about my health and/or activities (and those of my Dependants) to provide the Insurer with the said information. This shall include hospital and any other records pertaining to medical advice, diagnosis, treatment or disturbances. A photocopy of this authorisation has the same validity as the original. </Text>
                        <Text style={styles.HeadingText4}>I understand and acknowledge any pregnancy not declared at the time of this application’s coverage will be at the sole discretion of the insurer. The insurer has the right to not cover any maternity claims to any undeclared pregnancy. I also acknowledge and understand that for any pregnancy, which arises within forty calendar days from the date of this application; coverage will also be at the discretion of the insurer.  </Text>
                    </View>
                </View>

            </ScrollView>
            <Btn1 lable={"I agree Get Quotes"}  containerStyle={{backgroundColor:secondryColor}} lableStyle={{color:Colors.white,fontSize: 14,fontWeight: '700'}}/>
        </SafeAreaView>
    )
}
export default InsuranceForm2