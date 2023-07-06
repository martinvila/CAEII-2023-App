import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'


const Acreditacion = () => {
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

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    }

    if(hasPermission === null){
        return (
            <View style={styles.container}>
                <Text>Esperando permisos para acceder a la camara</Text>
            </View>
        )
    }

    if(hasPermission === false){
        return (
            <View style={styles.container}>
                <Text style={{margin: 10}}>No es posible acceder a la camara</Text>
                <Button title={'Permitir camara'} onPress={() => askForCameraPermission()}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.barCodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }}
                />
            </View>
            <Text style={styles.mainText}>{text}</Text>

            {scanned && <Button title={'Escanear'} onPress={() => setScanned(false)} color='tomato'/>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#f7f6f6"
    },

    barCodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: 400,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: '#000000'
    },
    
    mainText: {
        fontSize: 16,
        margin: 20,
        color: '#F5F5F5', 
        fontFamily: 'avenir-medium'
    }
})


export default Acreditacion