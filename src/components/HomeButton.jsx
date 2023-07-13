import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Linking, View } from 'react-native'
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';


const iconComponents = {
    MaterialCommunityIcons: MaterialCommunityIcons,
    Ionicons: Ionicons,
    MaterialIcons: MaterialIcons,
    // Agregar acá más bibliotecas de iconos según sea necesario
}


export const HomeButton = ({text, iconLibrary, iconName, onPress, url, size, colour}) => {
    const handleButtonPress = async () => {
        const supported = await Linking.canOpenURL(url)
    
        if (supported) {
          await Linking.openURL(url)
        } else {
          console.log(`No se pudo abrir la URL: ${url}`)
        }
    }

    const IconComponent = iconComponents[iconLibrary]
    let estilo = (text === "") ? {...styles.button, width: 135, height: 135} : styles.button
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

export const NightButton = ({iconLibrary, iconName, onPress, size, colour}) => {
    const IconComponent = iconComponents[iconLibrary]
    return (
        <LinearGradient colors={['#577ea6', '#2b434e']} style={styles.buttonNight}>
            <TouchableOpacity
                onPress={onPress}
            >
            
                {IconComponent && <IconComponent
                                    name={iconName}
                                    size={size}
                                    color={colour}
                                    style={{transform: [{rotate: '21deg'}], marginBottom: -12, marginLeft: -25}}
                                    />}

                {IconComponent && <IconComponent
                                    name={iconName}
                                    size={size}
                                    color={colour}
                                    style={{transform: [{rotate: '-14deg'}], marginTop: -12, marginRight: -25}}
                                    />}            
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 115,
        height: 115,
        backgroundColor: '#56869c',
        borderRadius: 100,
        marginRight: 40,
        marginLeft: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        elevation: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 13,
      fontFamily: 'avenir-black',
    },
    buttonNight: {
        flexDirection: 'row',
        width: 80,
        height: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        elevation: 10,
    },
})