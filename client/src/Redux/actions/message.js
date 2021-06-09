import {SET_MESSAGE} from "../constants";


export const setMessage = (message, isOpen) => {
    return {
        type: SET_MESSAGE,
        payload: {
            message,
            isOpen
        }
    }
}