import React from "react" ;
import { Text, StyleSheet, TouchableOpacity, Linking, View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { useLogout } from "../hooks/useLogout";

export const ExitButton = () => {
    const { logout} = useLogout()
    return (
        <View style={StyleSheet.exitContainer}>
            <TouchableOpacity onPress={()=>logout()}>
                <View style={styles.exitButton}>
                    <MaterialCommunityIcons name="logout-variant" size={25} color="#606060" />
                    <Text style={{color: '#606060',fontFamily: 'avenir-medium', fontSize:16}}> Cerrar Sesión</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    exitContainer: {
        padding:20,    
    },
    exitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
    }
});