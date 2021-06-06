import {AUTH_ACTION, OPEN_ACTION} from "../constants";


export const authAction = (profile) => {
    return {
        type: AUTH_ACTION,
        payload: profile
    }
}

export const openAction = () => {
    return {
        type: OPEN_ACTION,
    }
}


export const authThunk = (request, method, body, login) => async (dispatch) => {

    const res = await request(`/api/auth/${method}`, 'POST', body)
    login(res.token, res.userId)
    dispatch(authAction(res))
}