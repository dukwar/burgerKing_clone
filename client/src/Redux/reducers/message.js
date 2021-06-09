import {SET_MESSAGE} from "../constants";


const initialState = {
    message: '',
    isOpen: false
}

const message = (state = initialState, action) => {

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