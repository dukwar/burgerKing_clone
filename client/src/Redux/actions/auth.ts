import {AUTH_ACTION, OPEN_ACTION} from "../constants";
import {authActionType, openActionType} from "./types";
import {profileType} from "../reducers/types";
import {Dispatch} from "redux";

export const authAction = (profile:profileType | null):authActionType => {
    return {
        type: AUTH_ACTION,
        payload: profile
    }
}

export const openAction = ():openActionType => {
    return {
        type: OPEN_ACTION,
    }
}



export const authThunk =
    (request: (url: string, method: string, body: any, headers: any) => Promise<profileType>, method: string, body: any, login: (token: string, userId: string) => void) =>
        async (dispatch:Dispatch<authActionType>) => {
            const res = await request(`/api/auth/${method}`, 'POST', body, {})
            if (res) login(res.token, res.userId)
            dispatch(authAction(res))
}