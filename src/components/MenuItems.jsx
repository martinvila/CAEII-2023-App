import React, { useContext } from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { DrawerContentScrollView  } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import MenuButtom from './MenuButtom';

//import Acreditation from '../screens/Acreditation';

import { AuthContext } from '../context/StackNavigation'

const MenuItems = ( {navigation} ) => { 
    const { signOut } = useContext(AuthContext);
    return (
        <DrawerContentScrollView contentContainerStyle={styles.container} > 
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <View style={styles.avatarContainer}>
                    <MaterialCommunityIcons name="account-circle" size={100} color="#F5F5F5" />
                    <Text style={styles.avatarText}>Usuario</Text>
                </View>
            </TouchableOpacity>   

            <MenuButtom
            iconLibrary="MaterialCommunityIcons"
            iconName="lighthouse"
            text="Inicio"
            colour= "#13839C"
            onPress={ () => navigation.navigate('Inicio')} 
            /> 
            
            <MenuButtom
            iconLibrary="FontAwesome"
            iconName="group"
            text="Nosotros"
            colour= "#13839C"
            onPress= { () => navigation.navigate('Nosotros')}  
            /> 
            
            <MenuButtom
            iconLibrary="AntDesign"
            iconName="form"
            text="Contacto"
            colour= "#13839C"
            url='https://www.instagram.com/caeii_oficial/'   
            />
         
            {/* <MenuButtom
            iconLibrary="AntDesign"
            iconName="scan1"
            text="Acreditación"
            colour= "#13839C"
            onPress={ () => navigation.navigate('Acreditacion')} 
        />            */}
        </View>    

        <View style={styles.exitContainer}>
            <TouchableOpacity onPress={signOut}>
                <View style={styles.exitButton}>
                    <Ionicons name="exit-outline" size={30} color="#F5F5F5" />
                    <Text style={styles.exitText}>Salir</Text>
                </View>
            </TouchableOpacity>
        </View>

        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        padding: 15,
        justifyContent:'space-between'
    }, 
    exitContainer: {
        padding:20,        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20, 
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    avatarText: {
        marginLeft: 10,
        fontSize: 30,
        fontFamily: 'avenir-black',
        color: '#F5F5F5',
    },
    exitButton: {
        flexDirection: 'row',
        display: 'flex',
        

    },
    exitText: {
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'avenir-black',
        color: '#F5F5F5',
    },
});

export default MenuItems