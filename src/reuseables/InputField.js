import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, textFont, white } from '../utils/Styles'

// PROPS ==> icon:<icon>; oniconPress:<Fun>;lable:<String>; keyboardType:<String>
// placeholderTextColor:<color>; containerStyle:<styleObject>;textInputStyle:<styleObject>;onChage:<func>;isEditable:<boolean>;nol:<number>;

export const InputField = forwardRef((props, ref) => {

    const [isSecure, setisSecure] = useState(props.isSecure);
    const [borderWidth, setborderWidth] = useState(1);
    const [borderColor, setborderColor] = useState(white);
    const [elevation, setelev] = useState(0);

    useImperativeHandle(ref, () => ({
        toggleSecure
    }));
    const toggleSecure = () => {
        setisSecure(!isSecure)
    }
    return (
        <View style={{ borderWidth: borderWidth, borderColor: borderColor, elevation: elevation, ...styles.container, ...props.containerStyle }}>
            {props.lefticon}
            <TextInput
                editable={props.isEditable}
                value={props.value}
                onChangeText={props.onChange}
                multiline={props.ismultiline}
                numberOfLines={props.nol}
                color={Colors.black}
                keyboardType={props.keyboardType}
                style={{ borderWidth: borderWidth, borderColor: borderColor }}
                placeholder={props.lable}
                secureTextEntry={isSecure}
                onBlur={() => { setborderWidth(0.5); setborderColor(white); setelev(0) }}
                onFocus={() => { setborderWidth(0); setborderColor(Colors.darkgrey); setelev(8) }}
                placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : Colors.gray}
                style={{ ...textFont, backgroundColor: Colors.lightgrey, borderRadius: 8, flex: 1, ...props.textInputStyle }}
                returnKeyType={props.returnKeyType}
                onSubmitEditing={() => props.onAction && props.onAction()}
            />
            <TouchableOpacity onPress={props.oniconPress}>{props.icon}</TouchableOpacity>
        </View>
    )

})

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightgrey,
        marginVertical: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightgrey,
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 15,
    }
})












