// import React, { Component, useState, useEffect } from 'react';
// import {View,StyleSheet} from 'react-native'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


// export default Mapscreen=() => (
//    <View style={styles.container}>
//      <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
//    </View>
// );

// const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       height: 900,
//       width: 400,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//    });


import React, { Component } from "react";
// global.currentScreenIndex = 'Dashboard';
//Import all required component
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Button,
  NetInfo,
} from "react-native";
import MapView, { Marker,PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
   

class Mapscreen extends Component {
  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    Geolocation.getCurrentPosition((info) => {
      let lat = info.coords.latitude;
      let long = info.coords.longitude;

      console.log(lat);
      console.log(long);
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      this.setState({ initialPosition: initialRegion });
    });
  }

  render() {
    const { modalVisible } = this.state;
    
    // const token_data = token_value();
    // console.log("token_homes_2st"+token_data);

    return (
      <View style={styles.container}>
        <MapView
		provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={this.state.initialPosition}
          showsUserLocation={true}
        />
      </View>
    );
  }
}
export default Mapscreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontWeight: "400",
    color: "#000",
  },

  map: {
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
