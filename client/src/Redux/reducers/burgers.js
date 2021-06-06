import {SET_BURGERS, SET_BURGERS_ALL, SET_CATEGORIES} from "../constants";


const initialState = {
    burgers: null,
    burgersAll: [],
    categories: null
}


const burgers = (state = initialState, action) => {

    switch (action.type) {

        case SET_BURGERS_ALL:
            return {
                ...state,
                burgersAll: action.payload
            }

        case SET_BURGERS:

            const burgersPrev = !action.payload[0] ? {...state.burgers}
             : {...state.burgers, [action.payload[0]?.category]: action.payload}

            return {
            ...state,
                burgers: burgersPrev
            }

        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }



        default:
            return state
    }
}

export default burgers