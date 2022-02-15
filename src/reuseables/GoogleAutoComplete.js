import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { headings, shadow, textColor, white, transparent, primaryColor, secondryColor, Colors, primaryColorDim } from '../utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import languages from '../assets/languages/English.json'
export default class GoogleAutoComplete extends Component {
    render() {
        const { getloc } = this.props
        return (
            <GooglePlacesAutocomplete
                textInputProps={{ placeholderTextColor: textColor, ...headings.h4, textAlignVertical: "auto" }}
                textInputHide={false}
                fetchDetails={true}
                placeholder={'Find an address'}
                renderLeftButton={() => <FontAwesome5 name="search-location" size={22} color={primaryColor} />}
                enablePoweredByContainer={false}
                // getCurrentLocation={(val)=>{console.log(val)}}
                styles={{
                    container: {
                    },
                    textInputContainer: {
                        marginHorizontal: 10,
                        backgroundColor: '#F2F2F2',
                        alignItems: 'center',
                        paddingHorizontal: 10, borderRadius: 8,
                        borderColor: secondryColor,
                        borderWidth: 0.3,
                    },
                    textInput: {
                        paddingTop: 10,
                        height: 38,
                        color: textColor,
                        borderRadius: 8,
                        backgroundColor: '#F2F2F2'
                    },
                    listView: { width: '100%', marginVertical: 5, backgroundColor: white, borderRadius: 8, zIndex: 1 },
                    description: { ...headings.h5 },
                    row: { backgroundColor: Colors.primaryColorDim }
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    getloc({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                    });
                }}
                query={{
                    key: 'AIzaSyCQlj4QRE0kqgVBHHgKiBQhrU0C_SR0v10',
                    language: 'en',
                }}
            />

        )
    }
}
