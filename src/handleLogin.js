import { Alert } from 'react-native'
import users from '../recursos/users.json'


export const handleLogin = (email, password, signIn) => {    
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