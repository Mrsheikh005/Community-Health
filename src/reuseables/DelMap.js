import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, SafeAreaView, Button, TouchableWithoutFeedback, Modal, Dimensions, Animated, Easing } from 'react-native'
import MapView, { Marker, Callout, Polyline, Circle } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, headings, primaryColor, primaryColorDim, secondaryColorDim, secondryColor, textColor, transparent } from '../../utils/Styles';
import IconBtn from '../reuseable/IconBtn';
import ReactModal from '../reuseable/Modal'
import Option from '../reuseable/Option';
const modalref = React.createRef();
const modalref1 = React.createRef();
import GoogleAutoComplete from '../reuseable/GoogleAutoComplete';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { stations } from '../data/stationsList';
import Foundation from 'react-native-vector-icons/Foundation'
import * as Animatable from 'react-native-animatable';
import StationFlatList from '../reuseable/StationFlatList';
import { mapCurrentLocation } from '../utils/Helpers'
import { thisExpression } from '@babel/types';
import MapViewDirections from 'react-native-maps-directions';
const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

export default class Maps extends Component {

    constructor(props) {
        super(props);
        this.mapRef = null;
        this.state = {
            iconname: 'chevron-left',
            iconname1: 'chevron-up',
            stationList: [],
            myloc: { latitude: 0, longitude: 0 },
            origin: '',
            destination: '',
            measureDest: false,
            rotates: new Animated.Value(0),
            rotates1: new Animated.Value(0)
        }
    }
    rotate = (no) => {
        Animated.timing(
            no == 1 ? this.state.rotates1 : this.state.rotates,
            {
                toValue: 1,
                duration: 290,
                useNativeDriver: true,
                easing: Easing.linear
            }
        ).start()
    }

    rotateOut = (no) => {
        Animated.timing(
            no == 1 ? this.state.rotates1 : this.state.rotates,
            {
                toValue: 3,
                duration: 290,
                useNativeDriver: true,
                easing: Easing.linear
            }
        ).start()
    }
    isLocEqual = (loc, loc1) => {
        // console.log(Number(loc.latitude.toPrecision(4)) + '============' + Number(loc1.latitude.toPrecision(4)))
        if (Number(loc.latitude.toPrecision(4)) == Number(loc1.latitude.toPrecision(4)) && Number(loc.longitude.toPrecision(4)) == Number(loc1.longitude.toPrecision(4))) {
            return true
        } else {
            return false
        }
    }
    handleCurrentLocation = async (ismeasureDist) => {
        var obj = new mapCurrentLocation()
        const loc = await obj.getCurntLocation()
        // alert(no)
        ismeasureDist != 1 ? this.mapRef.animateToRegion({
            latitude: loc.latitude?loc.latitude:0.0,
            longitude: loc.longitude?loc.longitude:0.0,
            latitudeDelta: 0.000000723958820065,
            longitudeDelta: 0.009050270688370961,
        }, 1000) : null;
        this.setState((prev, props) => {
            return { measureDest: !prev.measureDest, myloc: loc }
        })
        return loc;
    }
    measureDistance = (destination) => {
        var origin = this.handleCurrentLocation(1);
        alert(origin)
        this.setState((prev, props) => {
            return { origin: origin, destination: destination }
        })
    }
    handleModal = () => {
        modalref.current.toggleModal();
        this.rotate();
    };
    handleModal1 = () => {
        modalref1.current.toggleModal();
        this.rotate(1)
    };

    regionChangeHandle = (val) => {
        var list = stations.filter(item => this.isLocEqual(val, item.info.loc) ? true : false);
        this.setState({ stationList: list })
        console.log(JSON.stringify(this.state.stationList) + "listttttttttttttt")

    }

    render() {
        const { iconname, iconname1, stationList, origin, destination, measureDest, currntloc } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor={transparent} />
                <View style={styles.mapCover}>
                    <MapView style={styles.map}
                        ref={(ref) => { this.mapRef = ref }}
                        showsMyLocationButton={true}
                        mapType="satellite"
                        zoomTapEnabled={false}
                        onRegionChangeComplete={this.regionChangeHandle}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        <MapViewDirections
                            origin={this.state.origin}
                            destination={this.state.destination}
                            apikey={'AIzaSyCQlj4QRE0kqgVBHHgKiBQhrU0C_SR0v10'}
                            strokeWidth={3}
                            strokeColor={Colors.blue}
                        />
                        <Circle
                            radius={30}
                            strokeColor={secondryColor}
                            fillColor={secondaryColorDim}
                            center={{
                                latitude: this.state.myloc.latitude,
                                longitude: this.state.myloc.longitude

                            }} />
                        {stations.map((item, index) => (
                            < Marker
                                key={item + index}
                                draggable
                                coordinate={{ latitude: item.info.loc.latitude, longitude: item.info.loc.longitude }}
                                onDrag={val => { }}
                                rotation={4}
                            >
                                {<Foundation name="marker" size={40} color={item.info.status == "available" ? Colors.green : item.info.status == "occupied" ? Colors.orange : item.info.status == "maintenance" ? Colors.black : item.info.status == "planned" ? Colors.purple : item.info.status == "unknown" ? Colors.blue : primaryColor} />}
                                <Callout
                                    onPress={() => { this.props.navigation.navigate('Profile', { item: item }) }}
                                    key={item.index}
                                >
                                    <View style={{ width: 200, paddingVertical: 10, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                                        <View>
                                            <Text style={headings.h4}>{item.name}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ overflow: 'hidden', textAlign: 'auto', ...headings.h5 }}>{item.info.connectors.join(', ')}</Text>
                                        </View>
                                    </View>
                                </Callout>
                            </Marker>

                        ))}
                    </MapView>
                </View>
                {/* OPTION MODAL BUTTON */}
                <View style={{ position: "absolute", top: 100, right: 15, }}>
                    <IconBtn
                        onpress={this.handleModal}
                        icon={<FontAwesome name={iconname} size={20} color={secondryColor} />}
                        style={{
                            transform: [{
                                rotateZ: this.state.rotates.interpolate({
                                    inputRange: [0, 1, 2, 3],
                                    outputRange: ['0deg', '180deg', '180deg', '0deg']
                                })
                            }]
                        }}
                    />
                </View>
                {/* NEAREST STATIONS MODAL BUTTON */}
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 15, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <IconBtn
                        style={{
                            transform: [{
                                rotateZ: this.state.rotates1.interpolate({
                                    inputRange: [0, 1, 2, 3],
                                    outputRange: ['0deg', '180deg', '180deg', '0deg']
                                })
                            }]
                        }}
                        onpress={this.handleModal1}
                        icon={<FontAwesome name={iconname1} size={22} color={secondryColor} />}
                    />
                </View>
                {/* MY CURRENT LOCATION */}
                <View style={{ position: 'absolute', top: 150, left: 0, right: 15, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                    <IconBtn
                        onpress={this.handleCurrentLocation}
                        icon={<MaterialIcons
                            name={"my-location"} size={22} color={Colors.blue} />}
                    />
                </View>
                <View style={{ position: 'absolute', width: "100%", top: 30 }}>
                    <GoogleAutoComplete />
                </View>
                <ReactModal animationIn="bounceInRight" animationOut="fadeOutRight" style={{ justifyContent: 'flex-start', alignItems: "center", }} view={<Option navigation={this.props.navigation} />} ref={modalref} onbackdrop={this.rotateOut} />
                <ReactModal animationIn="bounceInUp" animationOut="fadeOutDown" style={{ justifyContent: 'flex-end', alignItems: "center", margin: 0, }} view={<StationFlatList onpress={this.measureDistance} data={this.state.stationList} />} ref={modalref1} onbackdrop={() => this.rotateOut(1)} />
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    map: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        ...StyleSheet.absoluteFillObject,

    },
    mapCover: {
        borderWidth: 0.4,
        height: '100%',

    },
})


// {<Foundation name="marker" size={42} color={item.info.status == "available" ? Colors.green : item.info.status == "occupied" ? Colors.orange : item.info.status == "maintenance" ? Colors.black : item.info.status == "planned" ? Colors.purple : item.info.status == "unknown" ? Colors.blue : primaryColor} />}