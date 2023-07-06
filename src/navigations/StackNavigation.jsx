import React, { useReducer, useEffect, useMemo, createContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthContext } from '../hooks/useAuthContext'
//import { getItemAsync } from 'expo-secure-store'
import Splash from '../screens/Splash.jsx'
import Login  from '../screens/Login.jsx'
import Tabs from './BottomTabsNavigation.jsx'


const Stack = createNativeStackNavigator()

const StackNavigation = () => {
	const { isLoading, isLogout, userToken, dispatch } = useAuthContext()
	
	useEffect(() => {
		const bootstrapAsync = async () => {
		let userToken = null;
	
		try {
			await new Promise(resolve => setTimeout(resolve, 3000))
			// userToken = await SecureStore.getItemAsync('userToken');
		} catch (e) {
			console.log(e)
		}
		dispatch({ type: 'RESTORE_TOKEN', token: userToken });
		};
	
		bootstrapAsync();
	}, [])

	return (
		<NavigationContainer style={styles.container}>
			<StatusBar style="light" />
			<Stack.Navigator>
				{isLoading ? (
				// Checkeando si la sesion de usuario esta abierta
				<Stack.Screen 
					name="Splash"
					component={Splash}
					options={{headerShown: false}}
				/>
				) : userToken == null ? (
				// El usuario no esta logueado
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
					animationTypeForReplace: isLogout ? 'pop' : 'push',
					headerShown: false
					}}
				/>
				) : (
				// Usuario logueado
				<Stack.Screen
					name="Root"
					component={Tabs}
					options={{headerShown: false}}
				/>
				)}
			</Stack.Navigator>
		</NavigationContainer>   
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1   
	}
})

export default  StackNavigation