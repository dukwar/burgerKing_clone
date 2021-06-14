import {SET_BURGERS, SET_BURGERS_ALL, SET_CATEGORIES} from "../constants";
import {burgersTypeAction} from "../actions/types";
import {burgerApiType, burgersTypes, categoryType} from "./types";


const initialState = {
    burgers: null as burgersTypes | null,
    burgersAll: [] as burgerApiType[],
    categories: [] as categoryType[]
}



type initialStateType = typeof initialState

const burgers = (state = initialState, action:burgersTypeAction):initialStateType => {

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