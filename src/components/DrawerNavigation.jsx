import React, { useContext } from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { DrawerContentScrollView, createDrawerNavigator  } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import MenuButtom from './MenuButtom';
import Perfil from "../screens/Perfil" ;
//import Acreditation from '../screens/Acreditation';
import Home from '../screens/Home';
import Nosotros from '../screens/Nosotros'; 
import Notificaciones from '../screens/Notificaciones';  
import Cronograma from '../screens/Cronograma'; 
import Inscripciones from '../screens/Inscripciones'; 
import Pilares from '../screens/Pilares'; 
import Asistente from '../screens/Asistente';
import Noche from '../screens/Noche';  
import { AuthContext } from '../components/StackNavigation.jsx'

const Drawer = createDrawerNavigator(); 


export function DrawerNavigation() {
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


const MenuItems = ( {navigation} ) => { 
    const { signOut } = useContext(AuthContext);
    return (
        <DrawerContentScrollView style={styles.container}> 
        
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
            

            <TouchableOpacity onPress={signOut}>
                <View style={styles.exitButton}>
                    <Ionicons name="exit-outline" size={30} color="#F5F5F5" />
                    <Text style={styles.exitText}>Salir</Text>
                </View>
            </TouchableOpacity>

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

    notificationButton: {
        marginRight: 10,
    },

    exitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 350,
        marginLeft: 15
    },

    exitText: {
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'avenir-black',
        color: '#F5F5F5',
    },
})

