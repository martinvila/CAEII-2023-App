import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'; 
import {createDrawerNavigator  } from "@react-navigation/drawer";
import {  Ionicons} from '@expo/vector-icons';
import Perfil from "./screens/Profile" ;
//import Acreditation from '../screens/Acreditation';
import Home from './screens/Home';
import Nosotros from './screens/Us'; 
import Notificaciones from './screens/Notifications';  
import Cronograma from './screens/Schedule'; 
import Inscripciones from './screens/Inscriptions'; 
import Pilares from './screens/Pilares'; 
import Asistente from './screens/Assistant';
import Noche from './screens/Night';  
import MenuItems from './MenuItems';

const Drawer = createDrawerNavigator(); 

const DrawerNavigation = () => {
    
    return (
        <Drawer.Navigator
            drawerContent={ (props)=> <MenuItems {...props}/> }
            screenOptions={{
                headerStyle: {
                  backgroundColor: "black", // Cambiar el color del encabezado aquí
                },
                headerTitleStyle: {
                    fontFamily: 'avenir-black',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#F5F5F5', // Cambiar el color del texto del encabezado aquí

                headerRight: () => (
                    <TouchableOpacity 
                        style={styles.notificationButton}
                        //onPress={(props) => navigation.navigate('Notificaciones')}
                    >
                        <Ionicons name="notifications-outline" size={24} color="#F5F5F5" />
                    </TouchableOpacity>
                )      
            }}
        >
            <Drawer.Screen name="Inicio" component={ Home } />
            <Drawer.Screen name="Perfil" component={ Perfil } />
            <Drawer.Screen name="Nosotros" component={ Nosotros } />
            {/* <Drawer.Screen name="Acreditacion" component={ Acreditation } /> */}
            <Drawer.Screen name="Notificaciones" component={ Notificaciones } />
            <Drawer.Screen name="Cronograma" component={ Cronograma } />
            <Drawer.Screen name="Inscripciones" component={ Inscripciones } />
            <Drawer.Screen name="Pilares" component={ Pilares } /> 
            <Drawer.Screen name="Asistente" component={ Asistente } />
            <Drawer.Screen name="Noche" component={ Noche } />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    notificationButton: {
        marginRight: 10,
    },
});

export default DrawerNavigation;

