import {AUTH_ACTION, OPEN_ACTION} from "../constants";
import {authActionType, openActionType} from "./types";
import {profileType} from "../reducers/types";
import {Dispatch} from "redux";
import axios from "axios";

export const authAction = (profile:profileType, isAuth: boolean):authActionType => {
    return {
        type: AUTH_ACTION,
        profile,
        isAuth

    }
}


export const openAction = ():openActionType => {
    return {
        type: OPEN_ACTION,
    }
}

export const checkAuth = () => async (dispatch:Dispatch<any>) => {
    try {
        const res = await axios.get<profileType>('/api/auth/refresh', {withCredentials: true})
        localStorage.setItem('userData', res.data.accessToken)
        dispatch(authAction(res.data, true))
    } catch (e) {
        console.log(e.message)
    }
}

export const authThunk =
    (request: (url: string, method: string, body: any) => Promise<profileType>, method: string, body: any) =>
        async (dispatch:Dispatch<authActionType>) => {
            const res = await request(`/api/auth/${method}`, 'POST', body)
            if (method === 'login') {
                localStorage.setItem('userData', res.accessToken)
                dispatch(authAction(res, true))
            } else if (method === 'logout') {
                localStorage.removeItem('userData')
                dispatch(authAction({} as profileType, false))
            }
}