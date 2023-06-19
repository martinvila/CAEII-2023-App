import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import { Input } from 'react-native-elements'
import URLButton from '../URLButton.jsx'
import { handleLogin } from '../../handleLogin.js'
import { AuthContext } from '../../context/StackNavigation.jsx'


const Login = () => {
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')    
  const [hidePassword, setHidePassword] = useState(true)
  const { signIn } = useContext(AuthContext)

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../recursos/images/logoCAEII2.png')}/>
        <Input
            style={styles.text}
            placeholderTextColor='#F5F5F5'
            placeholder="Email"
            onChangeText={text => setUsername(text)}
        />
        <Input
            style={styles.text}
            placeholder="Contraseña"
            placeholderTextColor='#F5F5F5'
            secureTextEntry={hidePassword}
            onChangeText={text => setPassword(text)}    
            rightIcon={
              <TouchableOpacity activeOpacity = { 0.3 } style={styles.btnVisibility} onPress = {() => setHidePassword(!hidePassword)}>
                  <Image style={styles.btnImage} tintColor={'#F5F5F5'} source={(hidePassword) ? require('../../../recursos/images/ic_show_password.png') : require('../../../recursos/images/ic_hide_password.png') }/>
              </TouchableOpacity>
              }
        />
        <URLButton url={'https://inscripciones.aareii.org.ar/password/reset'}>¿Olvidó su contraseña?</URLButton>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin(email, password, signIn)}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Text style={styles.text}>¿No tienes una cuenta?</Text>
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
    padding: 30,
  },
  text: {
    color: '#F5F5F5', 
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
    backgroundColor: '#13839c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 100,
    marginBottom: 20,
  },
  buttonText: {
    color: '#f5f5f5',
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