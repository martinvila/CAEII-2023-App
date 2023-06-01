import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'

const Acreditacion = () => {
    return (
        <QRCodeScanner
            onRead={(data) => Alert.alert(data)}
            flashMode={RNCamera.Constants.FlashMode.torch}
        />
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#101010"
    },
})


export default Acreditacion