import React, { createRef, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import languages from "../assets/languages/English.json";
import { primaryColor, secondryColor, textColor, headings, shadow, transparent, primaryColorDim, white, container } from '../utils/Styles';
const ReactModal = React.forwardRef((props, ref) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [icon, seticon] = useState('left')
    const toggleModal = () => {
      
        setModalVisible(!isModalVisible);
    };
    useImperativeHandle(ref, () => ({
        toggleModal
    }));
    return (
        <View style={{ ...container.empty }}>
            {/* <Button title="Show modal" onPress={toggleModal} /> */}
            <Modal isVisible={isModalVisible}
                // swipeDirection={['left', 'right']}
                onBackdropPress={toggleModal}
                backdropOpacity={0.3}
                coverScreen={true}
                backdropColor={transparent}
                onBackButtonPress={toggleModal}
                onSwipeComplete={toggleModal}
                animationIn={props.animationIn}
                animationOut={props.animationOut}
                animationInTiming={1000}
                animationOutTiming={500}
            >
                {props.view}
            </Modal>
        </View >
    )
})

export default ReactModal;