import React from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { DrawerContentScrollView, createDrawerNavigator  } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import MenuButtom from './MenuButtom';
import Perfil from "../screens/Perfil" ;
import Acreditation from '../screens/Acreditation';
import Home from '../screens/Home';
import Nosotros from '../screens/Nosotros'; 
import Notificaciones from '../screens/Notificaciones';  
import Cronograma from '../screens/Cronograma'; 
import Inscripciones from '../screens/Inscripciones'; 
import Pilares from '../screens/Pilares'; 
import Asistente from '../screens/Asistente';

const Drawer = createDrawerNavigator(); 


export function DrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerContent={ (props)=> <MenuItems {...props}/> }
            screenOptions={{
                headerStyle: {
                  backgroundColor: "#101010", // Cambiar el color del encabezado aquí
                },
                headerTitleAlign: 'center',
                headerTintColor: 'white', // Cambiar el color del texto del encabezado aquí

                headerRight: () => (
                    <TouchableOpacity 
                        style={styles.notificationButton}
                        //onPress={(props) => navigation.navigate('Notificaciones')}
                    >
                        <Ionicons name="notifications-outline" size={24} color="white" />
                    </TouchableOpacity>
                )      
            }}
        >
            <Drawer.Screen name="Inicio" component={ Home } />
            <Drawer.Screen name="Perfil" component={ Perfil } />
            <Drawer.Screen name="Nosotros" component={ Nosotros } />
            <Drawer.Screen name="Acreditacion" component={ Acreditation } />
            <Drawer.Screen name="Notificaciones" component={ Notificaciones } />
            <Drawer.Screen name="Cronograma" component={ Cronograma } />
            <Drawer.Screen name="Inscripciones" component={ Inscripciones } />
            <Drawer.Screen name="Pilares" component={ Pilares } /> 
            <Drawer.Screen name="Asistente" component={ Asistente } />

        </Drawer.Navigator>
    );
}


const MenuItems = ( {navigation} ) => { 
    return (
        <DrawerContentScrollView style = { styles.container}> 
        
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <View style={styles.avatarContainer}>
                    <MaterialCommunityIcons name="account-circle" size={50} color="white" />
                    <Text style={styles.avatarText}>Usuario</Text>
                </View>
            </TouchableOpacity>   
                       
            <MenuButtom
             iconLibrary="MaterialCommunityIcons"
             iconName="lighthouse"
             text = "Inicio"
             onPress= { () => navigation.navigate('Inicio')} 
            /> 
            
            <MenuButtom
             iconLibrary="MaterialCommunityIcons"
             iconName="group"
             text = "Nosotros"
             onPress= { () => navigation.navigate('Nosotros')}  
            /> 

            <MenuButtom
             iconLibrary="AntDesign"
             iconName="form"
             text = "Contacto"
             url = 'https://www.instagram.com/caeii_oficial/'   
            /> 

            <MenuButtom
             iconLibrary="AntDesign"
             iconName="scan1"
             text = "Acreditación"
             onPress= { () => navigation.navigate('Acreditacion')} 
            /> 

        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        padding: 15, 
    }, 

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20, 
    },

    avatarContainer: {
        flexDirection: 'row',
        paddingHorizontal: 0,
        alignItems: 'center',
        paddingBottom: 10,
    },

    avatarText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    notificationButton: {
        marginRight: 10,
    }
})

