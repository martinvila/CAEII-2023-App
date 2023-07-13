import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { Alert } from 'react-native'
import users from '../../recursos/users.json'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)

        const foundUser = users.find(function(user) {
            return (user.email === email & user.password === password);
        });

        if (foundUser) {
            dispatch({ type: 'LOG_IN', token: foundUser.token, permissions: foundUser.permissions })
        }
        else{
            setError('Datos incorrectos')
            Alert.alert(error)
        }

    }

    return { login, error }
}