import {AUTH_ACTION, OPEN_ACTION} from "../constants";
import {AuthActionTypes} from "../actions/types";
import {profileType} from "./types";


const initialState = {
    profile: null as profileType | null,
    isAuth: false,
    isOpen: false,
    userData: null,
}

type initialStateType = typeof initialState


const auth = (state = initialState, action:AuthActionTypes):initialStateType => {

    switch (action.type) {
        case AUTH_ACTION:

        return {
            ...state,
            profile: action.profile,
            isAuth: action.isAuth
        }

        case OPEN_ACTION:

            return {
                ...state,
                isOpen: !state.isOpen
            }

        default:
            return state
    }
}

export default auth