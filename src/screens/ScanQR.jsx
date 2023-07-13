import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ScanQR = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [text, setText] = useState('Escaneando..')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status == 'granted')
        })()
    }

    useEffect(() => {
        askForCameraPermission()
    }, [])

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true)
        setText(data)
    }

    const reset = () => {
        setScanned(false)
        setText('Escaneando..')
    }

    if(hasPermission === null){
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Esperando permisos para acceder a la camara</Text>
            </View>
        )
    }

    if(hasPermission === false){
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>No es posible acceder a la camara</Text>
                <Button title={'Permitir camara'} onPress={() => askForCameraPermission()}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
            
            <Text style={styles.mainText}>Scan QR</Text>

            <TouchableOpacity
                activeOpacity={0.5}
                style={ (text==='Escaneando..') ? styles.button : {...styles.scan}}
                onPress={() => reset()}
            >
                <Text style={styles.mainText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#101010"
    },
    mainText: {
        fontSize: 16,
        color: '#ffffff', 
        fontFamily: 'avenir-medium'
    },
    button: {
        backgroundColor: '#000000',
        opacity: 0.2,
        width: '100%',
        height: 40,
        marginTop: 100,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scan: {
        backgroundColor: '#000000',
        opacity: 0.8,
        width: '80%',
        height: 40,
        height: 80,
        borderRadius: 20,
        marginTop: 100,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
})


export default ScanQR