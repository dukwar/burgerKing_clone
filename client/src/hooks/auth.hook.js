import {useCallback} from "react";

const storageName = 'userData'

export const useAuth = () => {

    const login = useCallback((jwtToken, userId) => {

        localStorage.setItem(storageName, JSON.stringify({
            userId: userId,
            token: jwtToken
        }))

    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem(storageName)
    }, [])




    return {login, logout, storageName}


}