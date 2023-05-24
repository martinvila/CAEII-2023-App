import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'


const Splash = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../../recursos/images/lema.jpg')}
                resizeMode={'contain'}
                blurRadius={0}>
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
        justifyContent: 'center'
    }
})


export default Splash