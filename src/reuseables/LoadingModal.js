import React, { Component } from 'react'
import { View, Modal, ActivityIndicator } from 'react-native'
import { SkypeIndicator } from 'react-native-indicators';
import { primaryColor } from '../utils/Styles'

export default class LoadingModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVis: false
        }
    }

    render() {
        let { isModalVis } = this.state
        return (
            <Modal
                visible={isModalVis}
                transparent
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 15 }}>
                    <View style={{ paddingHorizontal: 20, alignItems: "center" }}>

                        <View style={{ height: 100 }}>
                            <SkypeIndicator size={50} color={primaryColor} />
                        </View>

                    </View>
                </View>
            </Modal>
        )
    }

    showModal() {
        this.setState({ isModalVis: true })
    }

    cancelModal() {
        this.setState({ isModalVis: false })
    }
}
