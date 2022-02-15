/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    PermissionsAndroid
} from "react-native";
import MapView, {
    Marker,
    MarkerAnimated,
    AnimatedRegion,
    Polyline,
    PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";
import Geolocation from 'react-native-geolocation-service';

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
class tracking extends React.Component {
    constructor(props) {
        super(props);
        // var firebaseConfig = { 
        //   apiKey: "AIzaSyAx_h0y0rQTxNgHJQZkq5GUp3xh1mtyJp4",
        //   authDomain: "mealprep-58ec4.firebaseapp.com",
        //   databaseURL: "https://mealprep-58ec4.firebaseio.com",
        //   projectId: "mealprep-58ec4",
        //   storageBucket: "mealprep-58ec4.appspot.com",
        //   appId: "mealprep-58ec4",
        //   measurementId: "G-measurement-id",
        // };
        // firebase.initializeApp(firebaseConfig, 'MealPrep');

        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: 0,
                longitudeDelta: 0
            })
        };
    }
    componentWillUnmount() {
        Geolocation.clearWatch(this.watchID)
        Geolocation.stopObserving()
    }
    getTrack = () => {
        this.watchID = Geolocation.watchPosition(
            position => {
                console.log(position)
                const { coordinate, routeCoordinates, distanceTravelled } = this.state;
                const { latitude, longitude } = position.coords;
                const newCoordinate = {
                    latitude,
                    longitude   
                };
                if (Platform.OS === "android") {
                    if (this.marker) {
                        this.marker.animateMarkerToCoordinate(
                            newCoordinate,
                            500
                        );
                    }
                } else {
                    coordinate.timing({ ...newCoordinate, useNativeDriver: true }).start();
                }

                this.setState({
                    latitude,
                    longitude,
                    routeCoordinates: routeCoordinates.concat([newCoordinate]),
                    coordinate: newCoordinate,
                    distanceTravelled:
                        distanceTravelled + this.calcDistance(newCoordinate),
                    prevLatLng: newCoordinate
                }, () => { console.log(this.state.coordinate) });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, distanceFilter: 1 }
        );
    }
    componentDidMount() {
        this.getTrack()
    }

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };
    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    region={this.getMapRegion()}
                >
                    <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
                    <MarkerAnimated
                        ref={marker => { this.marker = marker }}
                        coordinate={this.state.coordinate} />
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.bubble, styles.button]}>
                        <Text style={{ color: 'black' }}>
                            {parseFloat(this.state.distanceTravelled).toFixed(2)} km
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    bubble: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    },
    latlng: {
        width: 200,
        alignItems: "stretch"
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: "center",
        marginHorizontal: 10
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent"
    }
});

export default tracking;