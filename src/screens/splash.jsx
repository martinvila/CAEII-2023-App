import React from 'react'
import { View, ImageBackground, StyleSheet, Text } from 'react-native'


const Splash = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../../recursos/images/splash.png')}
                resizeMode={'cover'}>
                <Text style={styles.lema}>NAVEGÁ EL PRESENTE,</Text>
                <Text style={styles.lema}>            CREÁ EL FUTURO.</Text>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010"
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lema: {
        fontWeight: 'bold',
        fontSize: 27,
        paddingLeft: 50,
        paddingBottom: 10,
        color: '#101010'
    }
})


export default Splash