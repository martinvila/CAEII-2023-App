import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = async () => {
        
            dispatch({ type: 'LOG_OUT'})
    }

    return { logout }
};