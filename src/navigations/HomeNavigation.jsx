import React from "react"
import { StyleSheet, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import Home from '../screens/Home'
import Cronograma from '../screens/Schedule'
import Pilares from '../screens/Pilares'
import Info from '../screens/Info'
import Nosotros from '../screens/Us'
import Asistente from '../screens/Assistant'
import Slide from '../screens/Notifications'

const HomeStack = createNativeStackNavigator()

const HomeNavigation = () => {
	return (
		<HomeStack.Navigator
			initialRouteName='Home'
			
			screenOptions={({route}) => ({
				animationEnabled: false,
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
			})}
		>
			<HomeStack.Screen 
				name="Bienvenido"
				component={Home}
				options={{
					headerRight: (props) => 
						<TouchableOpacity
							// onPress={() => navigation.navigate('Notificaciones')}
						>
							<Ionicons name="notifications-outline" size={28} color="#F5F5F5" />
						</TouchableOpacity>
				}}
			/>
			<HomeStack.Screen 
				name="Cronograma"
				component={Cronograma}
			/>
			<HomeStack.Screen 
				name="Pilares"
				component={Pilares}
			/>
			<HomeStack.Screen 
				name="Informacion"
				component={Info}
			/>
			<HomeStack.Screen 
				name="Nosotros"
				component={Nosotros}
			/>
			<HomeStack.Screen 
				name="Asistente"
				component={Asistente}
			/>
			<HomeStack.Screen 
				name="Notificaciones"
				component={Slide}
			/>
		</HomeStack.Navigator>
	)
}

export default HomeNavigation
