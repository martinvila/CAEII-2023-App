import React from 'react';
import { View, StyleSheet, Text } from 'react-native'; 

const Nosotros = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                francis se hace el ingles con us 
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#101010"
    },
    text:{
        color: '#F5F5F5', 
        fontFamily: 'avenir-medium'
    }
});



export default Nosotros; 