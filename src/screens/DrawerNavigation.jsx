import React from 'react';
import { DrawerContentScrollView, createDrawerNavigator  } from "@react-navigation/drawer";

import Profile from "./Profile" ;
import Acreditation from './Acreditation';
import Home from './Home';

import Nosotros from './Nosotros'; 
import Contacto from './Contacto';



import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { View , Text, StyleSheet} from 'react-native'; 
import MenuButtom from '../components/MenuButtom';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator(); 

export function DrawerNavigation( ) { 
    return (
        <Drawer.Navigator
            drawerContent={ (props)=> <MenuItems {...props}/> }
            screenOptions={{
                headerStyle: {
                  backgroundColor: "#101010", // Cambiar el color del encabezado aquí
                },
                headerTintColor: 'white', // Cambiar el color del texto del encabezado aquí
                
                headerRight: () => (
                    <TouchableOpacity
                        style={styles.notificationButton}
                        //onPress={() => navigation.navigate('Notificaciones')}
                    >
                        <Ionicons name="notifications-outline" size={24} color="white" />
                    </TouchableOpacity>
        ),      
              }}
        >

            <Drawer.Screen name="Perfil" component={ Profile } />
            <Drawer.Screen name="Inicio" component={ Home } />
            <Drawer.Screen name="Acreditacion" component={ Acreditation } />
            <Drawer.Screen name="Nosotros" component={ Nosotros } />
            <Drawer.Screen name="Contacto" component={ Contacto } />
           
            
            
        </Drawer.Navigator>
    );
}


const MenuItems = ( {navigation} ) => { 
    return (
        <DrawerContentScrollView
            style = { styles.container}
        > 
        
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
             iconLibrary="Ionicons"
             iconName="group"
             text = "Nosotros"
             onPress= { () => navigation.navigate('Nosotros')}  
            /> 

            <MenuButtom
             iconLibrary="AntDesign"
             iconName="form"
             text = "Contacto"
             onPress= { () => navigation.navigate('Contacto')}   
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
      },
})

