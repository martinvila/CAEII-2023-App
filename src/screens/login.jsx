import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import { Input } from 'react-native-elements'
import URLButton from '../components/URLButton'
import users from '../../recursos/users.json'
import { AuthContext } from '../components/StackNavigation.jsx'


const Login = () => {
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')    
  const [hidePassword, setHidePassword] = useState(true)    
  const { signIn } = useContext(AuthContext);

    
    const handleLogin = () => {
      
        const foundUser = users.find(function(user) {
          return (user.email === email & user.password === password);
        });
        
        if (foundUser) {
          signIn(foundUser)
        }
        else
          Alert.alert('Datos incorrectos')

        // fetch('https://inscripciones.aareii.org.ar/api/v1/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: { 
        //         'email': email, 
        //         'password': password
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         Alert.alert('Inicio de sesión exitoso')
        //     } else {
        //         Alert.alert('Inicio de sesión fallido')
        //     }
        // })
        // .catch(error => {
        //     console.error(error);
        // })
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../recursos/images/logoCAEII2.png')}/>
            <Input
                style={{color: '#F5F5F5'}}
                placeholderTextColor='#F5F5F5'
                placeholder="Email"
                onChangeText={text => setUsername(text)}
            />
            <Input
                style={{color: '#F5F5F5'}}
                placeholder="Contraseña"
                placeholderTextColor='#F5F5F5'
                secureTextEntry={hidePassword}
                onChangeText={text => setPassword(text)}    
                rightIcon={
                  <TouchableOpacity activeOpacity = { 0.3 } style={styles.btnVisibility} onPress = {() => setHidePassword(!hidePassword)}>
                      <Image style={styles.btnImage} tintColor={'#F5F5F5'} source={(hidePassword) ? require('../../recursos/images/ic_show_password.png') : require('../../recursos/images/ic_hide_password.png') }/>
                  </TouchableOpacity>
                  }
            />
            <URLButton url={'https://inscripciones.aareii.org.ar/password/reset'}>¿Olvidó su contraseña?</URLButton>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={{color: '#F5F5F5'}}>¿No tienes una cuenta?</Text>
            <URLButton url={'https://inscripciones.aareii.org.ar/register'}>Regístrate</URLButton>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010", 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  title: {
    fontSize: 48,
    color: '#F5F5F5',
    fontWeight: 'bold',
    marginTop: 90,
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#13839c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 100,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  },
  logo: {
    resizeMode: 'contain',
    height: '25%',
    width: '100%',
    marginBottom: 40,
    marginTop: 30
  }
})


export default Login