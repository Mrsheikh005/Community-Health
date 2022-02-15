import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { primaryColor, Colors, white, headings } from '../utils/Styles';
import * as Animatable from 'react-native-animatable';
import OneText from './OneText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import ImagePicker from 'react-native-image-crop-picker';


export default class BigHeader extends Component {
	constructor() {
		super();
		this.state = {
			image: ''
		};
	}

	select = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true
		})
			.then((image) => {
				console.log(image);
				this.setState({ image: image.path });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const {
			icon,
			lable1,
			lable1Style,
			lable2,
			lable2Style,
			msg1,
			msg1Style,
			msg2Style,
			msg3Style,
			iconView,
			msg2,
			msg3,
			containerStyle,
			img,
			onPress
		} = this.props;
		return (
			<View style={{ ...styles.container, ...containerStyle }}>
				<StatusBar backgroundColor={primaryColor} />
				{!lable1 && !lable2 ? null : (
					<OneText
						lable1={lable1}
						lable2={lable2}
						lable1Style={{ color: Colors.black, ...lable1Style }}
						lable2Style={{ color: white, ...lable2Style }}
					/>
				)}
				<Animatable.View style={{ ...iconView }}>
					{icon}
				</Animatable.View>
				{!msg1 ? null : (
					<View style={{ marginVertical: 5, marginHorizontal: 5 }}>
						<Text style={{ ...styles.t1, ...msg1Style }}>{msg1}</Text>
					</View>
				)}
				{!msg2 ? null : (
					<View style={{ marginVertical: 5 }}>
						<Text style={{ ...styles.t2, ...msg2Style }}>{msg2}</Text>
					</View>
				)}
				{!msg3 ? null : <Text style={{ ...styles.t1, marginVertical: 5, ...msg3Style }}>{msg3}</Text>}
				{img ? (
					<TouchableOpacity onPress={onPress}>
						<View style={{ top: 40 }}>
							<ImageBackground source={require('../assets/images/icons/ring.png')}>
								<View style={{ margin: 5 }}>{img}</View>
							</ImageBackground>
						</View>
					</TouchableOpacity>
				) : null}
				
					
						<View style={{}}>
							<Animatable.View animation="flipInX">
								<View style={styles.Image_View} />
								{this.state.image != '' && (
									<Image source={{ uri: this.state.image }} style={styles.Image} />
								)}

								<View style={{ position: 'absolute', right: 135, top: 50 }}>
									<TouchableOpacity
										style={{
											elevation: 5,
											padding: 8,
											borderRadius: 50,
											backgroundColor: '#1FB8B4'
										}}
									>
										<MaterialIcons
                                            
											name="camera-alt"
											size={20}
											color="#ffff"
											onPress={()=>this.select()}
                                            
										/>
									</TouchableOpacity>
								</View>
							</Animatable.View>
						</View>
					
		
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		elevation: 15,
		backgroundColor: primaryColor,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		paddingTop: 100,
		paddingBottom: 30
		// justifyContent: 'flex-end',
		// alignItems: 'center'
	},
	t1: {
		...headings.h6M,
		color: white,
		textAlign: 'center',
		lineHeight: 20
	},
	t2: {
		...headings.h4b,
		color: white
	},
    Image: {
        height: 125,
        width: 125,
        alignSelf: 'center',
        borderRadius: 60,
        backgroundColor: 'green',
        justifyContent:'center',
        marginTop: -20,

    },
	Image_View: {
		height: 125,
		width: 125,
		alignSelf: 'center',
		borderRadius: 62,
		backgroundColor: '#F4F4F4',
		marginTop: -20,
		position: 'absolute',
        justifyContent:'center'
	},


});
