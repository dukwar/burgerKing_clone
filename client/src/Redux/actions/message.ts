import {SET_MESSAGE} from "../constants";
import {setMessageType} from "./types";


export const setMessage = (message:string, isOpen:boolean):setMessageType => {
    return {
        type: SET_MESSAGE,
        payload: {
            message,
            isOpen
        }
    }
}