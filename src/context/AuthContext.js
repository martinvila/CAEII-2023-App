import { useReducer, createContext } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                userToken: action.token,
                permissions: action.permissions,
                isLoading: false,
            }
        case 'LOG_IN':
            return {
                isLogout: false,
                userToken: action.token,
                permissions: action.permissions,
            }
        case 'LOG_OUT':
            return {
                isLogout: true,
                userToken: null,
                permissions: null,
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        isLoading: true,
        isLogout: false,
        userToken: null,
        permissions: null
	})

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}