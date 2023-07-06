import React, { useState, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import { Input } from 'react-native-elements'
import URLButton from '../components/URLButton.jsx'
import { useLogin } from '../hooks/useLogin.js'

// const handleLogin = (email, password) => {
//     fetch('https://inscripciones.aareii.org.ar/api/v1/login', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: { 
//             'email': email, 
//             'password': password
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             Alert.alert('Inicio de sesión exitoso')
//         } else {
//             Alert.alert('Inicio de sesión fallido')
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     })
// }

const Login = () => {
    const [email, setUsername] = useState('')
    const [password, setPassword] = useState('')    
    const [hidePassword, setHidePassword] = useState(true)
    const { login, error } = useLogin()

    const handleLogin = async () => {
        await login(email, password)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <Image style={styles.logo} source={require('../../recursos/images/logoCAEII.png')}/>

            <Input
                style={styles.text}
                placeholderTextColor='#404040'
                placeholder="Email"
                autoCapitalize='none'
                onChangeText={text => setUsername(text)}
            />

            <Input
                style={styles.text}
                placeholder="Contraseña"
                autoCapitalize='none'
                placeholderTextColor='#404040'
                secureTextEntry={hidePassword}
                onChangeText={text => setPassword(text)}    
                rightIcon={
                <TouchableOpacity activeOpacity = { 0.3 } style={styles.btnVisibility} onPress = {() => setHidePassword(!hidePassword)}>
                    <Image style={styles.btnImage} tintColor={'#404040'} source={(hidePassword) ? require('../../recursos/images/ic_show_password.png') : require('../../recursos/images/ic_hide_password.png') }/>
                </TouchableOpacity>
                }
            />

            <URLButton url={'https://inscripciones.aareii.org.ar/password/reset'}>¿Olvidaste tu contraseña?</URLButton>
            
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            
            <Text style={styles.text}>¿No tienes una cuenta?</Text>
            
            <URLButton url={'https://inscripciones.aareii.org.ar/register'}>Registrate</URLButton>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f6f6", 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    color: '#404040', 
    fontFamily: 'avenir-medium'
  },
  logo: {
    resizeMode: 'contain',
    height: '25%',
    width: '100%',
    marginBottom: 40,
    marginTop: 30
  },
  button: {
    backgroundColor: '#56869c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 100,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'avenir-black'
  },
  btnVisibility: {
    height: 40,
    width: 35,
    paddingTop: 8,
    paddingLeft:5,
    paddingRight:5
  },
  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }
})

export default Login;