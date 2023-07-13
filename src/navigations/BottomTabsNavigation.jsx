import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { useAuthContext } from '../hooks/useAuthContext'
import Perfil from "../screens/Profile" 
import ScanQR from '../screens/ScanQR'
import Acreditation from '../screens/Acreditation'
import HomeNavigation from './HomeNavigation'
import Inscripciones from '../screens/Inscriptions'
import Attendance from "../screens/Attendance"

const Tab = createBottomTabNavigator()

const HomeButtonTab = ({onPress, children}) => {
    return (
        <TouchableOpacity
            style={styles.button} 
            onPress={onPress}
            activeOpacity={1}
        >
            {children}
        </TouchableOpacity>
    )
}

function Tabs() {
    const { permissions } = useAuthContext()
    const Screen = (permissions === 'admin') ? ScanQR : Acreditation
    return (
        <Tab.Navigator
            initialRouteName='HomeNavigation'
            backBehavior='history'

            screenOptions={({route}) => ({
                headerStyle: {
                    backgroundColor: "#56869c", // Cambiar el color del encabezado aquí
                    height: 90,
                },
                headerTitleStyle: {
                    fontFamily: 'avenir-black',
                    fontSize: 24,
                },
                headerTitleAlign: 'center',
                headerTintColor: '#F5F5F5', // Cambiar el color del texto del encabezado aquí

                tabBarShowLabel: false,
                tabBarStyle: { 
                    height: 50,
                    backgroundColor: '#56869c',
                },

                tabBarIcon: ({focused}) => {
                    let iconName
                    let iconSize = 30
                    if(route.name === 'Asistencia'){
                        iconName = focused ? "clipboard" : "clipboard-outline"
                    } else if(route.name === 'Acreditacion'){
                        iconName = focused ? "qr-code" : "qr-code-outline"
                    } else if(route.name === 'HomeNavigation'){
                        iconName = focused ? "home" : "home-outline"
                        iconSize = 35
                    } else if(route.name === 'Inscripciones'){
                        iconName = focused ? "create" : "create-outline"
                    } else if(route.name === 'Perfil'){
                        iconName = focused ? "person-circle" : "person-circle-outline"
                    }
                    return <Ionicons name={iconName} color={'#f5f5f5'} size={iconSize} />
                }
            })}
        >
            <Tab.Screen name="Asistencia" component={ Attendance }/>

            {/* {permissions === 'admin' ? (
				// El usuario puede acreditar */}
				<Tab.Screen 
                    name="Acreditacion"
                    component={ Screen }
                    options={{
                        headerShown: (permissions === 'admin') ? false : true,
                }}/>
			{/* ) : (
				// El usuario no puede acreditar
				<Tab.Screen 
                    name="Acreditacion" 
                    component={ Acreditation }
                />
			)} */}
            
            <Tab.Screen
                name="HomeNavigation"
                component={ HomeNavigation }
                options={{
                    headerShown: false,
                    tabBarButton: (props) => <HomeButtonTab {...props}/>
                }}
            />
            <Tab.Screen name="Inscripciones" component={ Inscripciones }/>
            <Tab.Screen name="Perfil" component={ Perfil }/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        backgroundColor: "#54849b",
        borderRadius: 100,
        marginRight: 15,
        marginLeft: 15,
        marginTop: -15,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: "#f7f6f6"
    },
})

export default Tabs