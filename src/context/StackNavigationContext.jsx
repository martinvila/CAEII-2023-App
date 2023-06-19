import React, { useReducer, useEffect, useMemo, createContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { getItemAsync } from 'expo-secure-store'
import Splash from '../components/screens/Splash.jsx'
import Login  from '../components/screens/Login.jsx'
import  DrawerNavigation  from '../components/DrawerNavigation.jsx'


export const AuthContext = createContext()

const Stack = createNativeStackNavigator()

const StackNavigation = () => {

    const [state, dispatch] = useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
    );
    
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
    }, []);
    
    const authContext = useMemo(() => ({
        signIn: async (data) => {
            dispatch({ type: 'SIGN_IN', token: data.token });
        },
        signOut: () => dispatch({ type: 'SIGN_OUT' }),
    }), [])

    return (      
        <AuthContext.Provider value={authContext}>
            <NavigationContainer style={styles.container}>
                <StatusBar style="light" />
                <Stack.Navigator>
                    {state.isLoading ? (
                    // Checkeando si la sesion de usuario esta abierta
                    <Stack.Screen 
                        name="Splash"
                        component={Splash}
                        options={{headerShown: false}}
                    />
                    ) : state.userToken == null ? (
                    // El usuario no esta logueado
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                        animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                        headerShown: false
                        }}
                    />
                    ) : (
                    // Usuario logueado
                    <Stack.Screen
                        name="Home"
                        component={DrawerNavigation}
                        options={{headerShown: false}}
                    />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>      
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1   
    }
});

export default  StackNavigation;