import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'; 

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const Acreditation = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi ID</Text>

            <Image source={require("../../recursos/images/QR_code.png")} style={styles.qr}/>

            <Text style={styles.text}>Utilizalo como credencial para acceder a todos los eventos a los que estas inscripto</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f6f6',
      alignItems: 'center',
      padding: 20,
      paddingTop: 20,
      paddingBottom: 40,
      justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'avenir-black',
        fontSize: 60,
    },
    qr: {
        height: h * 0.5,
        width: w * 0.9,
    },
    text: {
        fontFamily: 'avenir-medium',
        fontSize: 18,
        textAlign: 'justify',
    }
});


export default Acreditation; 