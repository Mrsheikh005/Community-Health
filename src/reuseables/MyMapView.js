import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE, } from 'react-native-maps';
import { Colors, primaryColor, transparent, white } from '../utils/Styles';
import { AlertBox, CoordFromAddress, trackRider } from '../utils/Helpers';
import { getCurntLocation, clearWatchId } from '../utils/Helpers';
import { multiLocationPermission } from '../utils/Permissions';
import { openSettings } from 'react-native-permissions'

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class MyMapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLat: 0, currentLng: 0,
            loading: true,
        }
    }

    componentDidMount() {
        // const unsubscribe = this.props.navigation.addListener('blur', (e) => {
        //     // Prevent default action
        //     console.log('blur')
        // });
        // console.log("mapview ==========={componetdidmount}")
        multiLocationPermission(this.IsAllow)
    }

    componentDidUpdate() {
        // console.log("conponentDidUpdate============>")
    }

    updateMapCoords(lat, lng) {
        this.setState({
            currentLat: lat,
            currentLng: lng
        })
    }

    getSelectedCoords() {
        const { currentLat, currentLng } = this.state
        return {
            latitude: currentLat,
            longitude: currentLng
        }
    }

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    //=============== HANDLE ANIMATE TO CURRENT LOCATION ============
    IsAllow = (res) => {
        res ?
            getCurntLocation(
                (position) => {
                    this.setState({
                        currentLat: position.coords.latitude,
                        currentLng: position.coords.longitude
                    })
                },
                (error) => { console.log(error + ",,,,,,,,,") }
            ) :
            AlertBox('Permission Denied', 'Allow location access', [{
                text: "allow", style: "default", onPress: () => openSettings()
            },])
    }

    render() {
        // console.log('==========')
        // console.log(this.state.coordinate)
        const { loc, status, addStaticMarker = false, maptype = '', getCoords } = this.props
        const { currentLat, currentLng } = this.state
        return (
            <View style={styles.mapCover}>
                <MapView
                    // region
                    followUserLocation
                    showsUserLocation={false}
                    onRegionChangeComplete={() => { }}
                    ref={(ele) => this.mapRef = ele}
                    onMapReady={() => { this.setState({ loading: false }) }}
                    mapType={maptype == '' ? 'standard' : maptype}
                    loadingEnabled={this.state.loading}
                    loadingBackgroundColor={transparent}
                    loadingIndicatorColor={primaryColor}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: currentLat,
                        longitude: currentLng,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                    <Marker
                        pinColor={primaryColor}
                        coordinate={{
                            latitude: currentLat,
                            longitude: currentLng,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                    />
                </MapView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    mapCover: {
        flex: 1
    },
    staticmarkerstyle: {
        zIndex: 1,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginTop: -37,
        marginLeft: -11
    }
})



 // getZoom = async () => {
    //     const coords = await this.mapRef.getCamera();
    //     // alert(JSON.stringify(coords));
    //     this.setState({ zoom: coords.center.zoom }); // sets variable zoom the value under coords.center.zoom
    // }
    // onMapLayout = () => {
    //     this.mapRef.fitToSuppliedMarkers(['mk1'], {
    //         animated: false,
    //         edgePadding:
    //         {
    //             top: 50, right: 50, bottom: 50, left: 50
    //         }

    //     })
    // };

    // The map type to be displayed.
    // standard: standard road map(default )
    // none: no map
    // satellite: satellite view
    // hybrid: satellite view with roads and points of interest overlayed
    // terrain: (Android only) topographic view
    // mutedStandard: more subtle, makes markers / lines pop more(iOS 11.0 + only)