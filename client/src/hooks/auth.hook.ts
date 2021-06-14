import {useCallback} from "react";
import {useAuthType} from "./types";

const storageName = 'userData'

export const useAuth = ():useAuthType => {

    const login = useCallback((jwtToken:string, userId:string) => {

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