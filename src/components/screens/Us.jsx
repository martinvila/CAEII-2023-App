import React from 'react';
import { View, StyleSheet, Text } from 'react-native'; 

const Nosotros = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere incidunt aspernatur, nulla, rem animi fuga non dolore pariatur vel quibusdam aliquam sapiente veritatis. Hic veniam quas eum nostrum tenetur aliquam iure quae incidunt illum? Temporibus expedita reiciendis asperiores qui quisquam accusantium quos. Recusandae minima voluptate commodi reprehenderit quod non dignissimos!
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