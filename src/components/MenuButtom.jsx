import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, AntDesign , Ionicons, FontAwesome, Feather} from '@expo/vector-icons';


const iconComponents = {
    MaterialCommunityIcons: MaterialCommunityIcons,
    AntDesign: AntDesign,
    Ionicons: Ionicons, 
    FontAwesome: FontAwesome, 
    Feather: Feather, 
    // Agregar acá más bibliotecas de iconos según sea necesario
};


const MenuButtom = ( {text, iconLibrary, iconName, onPress ,  url, colour}) => {
   
    const handleButtonPress = async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log(`No se pudo abrir la URL: ${url}`);
        }
    };

    const IconComponent = iconComponents[iconLibrary];
    return (
        <TouchableOpacity
            style = { styles.buttonContainer } 
            onPress= {onPress || handleButtonPress}
        >
            {IconComponent && <IconComponent name={iconName} size={24} color={colour} />}
            <Text style = {styles.text}> {text} </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#404040', 
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10, 
        marginBottom: 15, 
        padding : 15 , 

    },
    text: {
        color: '#F5F5F5',
        fontSize: 18,
        fontFamily: 'avenir-black',
        marginStart: 10,
    },
})


export default MenuButtom; 