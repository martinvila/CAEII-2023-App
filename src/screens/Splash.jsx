import React, { useEffect, useRef } from 'react'
import { View, ImageBackground, StyleSheet, Text, Animated } from 'react-native'
import { StatusBar } from 'expo-status-bar'


const Splash = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start()
      }, [fadeAnim])
    
    const fadeAnim1 = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        }).start()
    }, [fadeAnim1])

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground
                style={styles.image}
                source={require('../../recursos/images/splash.png')}
                resizeMode={'cover'}>
                <Animated.View style={{backgroundColor: '#9b483a', borderRadius: 20, opacity: fadeAnim}}>
                    <Text style={styles.lema}>NAVEGÁ EL PRESENTE,</Text>
                </Animated.View>
                <Animated.View style={{backgroundColor: '#9b483a', borderRadius: 20, opacity: fadeAnim1, marginTop: 10, marginLeft: 70, width: 300}}>
                    <Text style={styles.lema}>CREÁ EL FUTURO.</Text>
                </Animated.View>
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
        justifyContent: 'center',
        paddingTop: 280,
        padding: 20
    },
    lema: {
        fontFamily: 'avenir-black',
        fontSize: 27,
        color: '#f5f5f5',
        marginLeft: 30
    }
})


export default Splash