import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons, Ionicons, } from '@expo/vector-icons';


const iconComponents = {
    MaterialCommunityIcons: MaterialCommunityIcons,
    Ionicons: Ionicons,
    // Agregar acá más bibliotecas de iconos según sea necesario
};


const HomeButton = ({text, iconLibrary, iconName, onPress, url, size, colour}) => {
   
    const handleButtonPress = async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log(`No se pudo abrir la URL: ${url}`);
        }
    };

    const IconComponent = iconComponents[iconLibrary];
    let estilo = (text === "") ? {...styles.button, width: 125, height: 125} : styles.button
    return (
        <TouchableOpacity
            style={estilo} 
            onPress={onPress}
        >
            {IconComponent && <IconComponent name={iconName} size={size} color={colour} />}
            <Text style = {styles.buttonText}> {text} </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 105,
        height: 105,
        backgroundColor: "#56869c",
        borderRadius: 100,
        marginRight: 40,
        marginLeft: 40,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#000000',
        elevation: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 13,
      fontFamily: 'avenir-black',
    },
})


export default HomeButton; 