import React, { Component, useState, useEffect } from 'react';
import {View,StyleSheet} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from "@react-native-community/geolocation";
import { Marker } from 'react-native-maps';

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
            };
          }
          
  render() {
    return (
        <View style={styles.container}>
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
                    
                    <Marker
                    coordinate={this.state.initialPosition}
                    />
                </MapView>
              </View>
      
    )
  }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 900,
      width: 420,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });










// {<Foundation name="marker" size={42} color={item.info.status == "available" ? Colors.green : item.info.status == "occupied" ? Colors.orange : item.info.status == "maintenance" ? Colors.black : item.info.status == "planned" ? Colors.purple : item.info.status == "unknown" ? Colors.blue : primaryColor} />}