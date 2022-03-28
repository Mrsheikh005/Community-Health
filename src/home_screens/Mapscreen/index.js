import React, { Component, useState, useEffect } from 'react';
import {View,StyleSheet,Text,SafeAreaView,TouchableOpacity} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from "@react-native-community/geolocation";
import { Marker } from 'react-native-maps';
import HomeHeader from '../../reuseables/HomeHeader';
import Arrow from 'react-native-vector-icons/AntDesign'
import TransparentHeader from '../../reuseables/TransparentHeader/TransparentHeader';
import { primaryColor,secondryColor,Colors,headings,textColor,white} from '../../utils/Styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class Mapscreen extends Component {
    constructor(props) {
            super(props);
            this.state = {
              initialPosition: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              },
              markers: [{
                title: 'hello',
                coordinates: {
                  latitude: 37.78825,
                  longitude: -122.4324
                },
              },
              {
                title: 'hello2',
                coordinates: {
                  latitude: 38.78825,
                  longitude: -123.4324
                },  
              }]
            };
          }
          
  render() {
    const { getloc } = this.props
    return (
        <SafeAreaView style={styles.container}>
            <View style={{}}>
            <TransparentHeader title='Select your Location'/>

            <GooglePlacesAutocomplete
                textInputProps={{ placeholderTextColor: textColor, ...headings.h4, textAlignVertical: "auto" }}
                textInputHide={false}
                fetchDetails={true}
                placeholder={'Find an address'}
                renderRightButton={() => <FontAwesome5 name="search-location" size={22} color={primaryColor} />}
                enablePoweredByContainer={true}
                autoFillOnNotFound={true}
                fetchDetails={true}
                getCurrentLocation={(val)=>{console.log('==============>',val)}}
                styles={{
                    container: {
                        marginTop:'10%',
                        width:'100%',
                        alignSelf:'center',
                        flex:1,marginHorizontal:'50%'
                    },
                    textInputContainer: {
                        backgroundColor: '#F2F2F2',
                        alignItems: 'center',
                     borderRadius: 8,
                        borderColor: secondryColor,
                        borderWidth: 0.3,
                        flex:1
                        // marginTop:'19%'
                    },
                    textInput: {
                        height: 38,
                        color: textColor,
                        borderRadius: 8,
                        backgroundColor: '#F2F2F2',
                        
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
                    key: 'AIzaSyCA6YMrH8nL8Tq03KeNm_ufcVDDcSwp0nc',
                    language: 'en',
                }}
            />
            </View>
               <MapView
        		provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  initialRegion={this.state.initialPosition}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  showsBuildings={true}
                  zoomEnabled={true}
                  loadingEnabled={true}
                >
                  {this.state.markers.map(marker => (
             <Marker
            coordinate={marker.coordinates}
            title={marker.title}
                 />
  ))}
                </MapView>
              </SafeAreaView>
      
    )
  }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex:1
    
      
    },
    map: {
      ...StyleSheet.absoluteFillObject,

    },
   });










// {<Foundation name="marker" size={42} color={item.info.status == "available" ? Colors.green : item.info.status == "occupied" ? Colors.orange : item.info.status == "maintenance" ? Colors.black : item.info.status == "planned" ? Colors.purple : item.info.status == "unknown" ? Colors.blue : primaryColor} />}