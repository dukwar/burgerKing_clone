import {AUTH_ACTION, OPEN_ACTION} from "../constants";


const initialState = {
    profile: null,
    isOpen: false,
    userData: null,
}


const auth = (state = initialState, action) => {

    switch (action.type) {
        case AUTH_ACTION:

        return {
            ...state,
            profile: action.payload
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