import {SET_MESSAGE} from "../constants";
import {messageType} from "../actions/types";



const initialState = {
    message: '',
    isOpen: false
}

type initialStateType = typeof initialState

const message = (state = initialState, action:messageType):initialStateType => {

    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                isOpen: action.payload.isOpen
            }


        default:
            return state
    }
}

export default message