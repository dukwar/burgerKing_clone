import {
    ADD_BURGER_CART,
    ADD_LOCAL_ITEM,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    REMOVE_LOCAL_ITEM
} from "../constants";
import {cartType} from "./types";
import {burgerType} from "../reducers/types";

export const addBurgerToCart = (burgerObj:burgerType):cartType => {
    return {
        type: ADD_BURGER_CART,
        payload: burgerObj
    }
}

export const clearCart = ():cartType => {
    return {
        type: CLEAR_CART,

    }
}

export const removeCartItem = (id:string):cartType => {
    return {
        type: REMOVE_CART_ITEM,
        id

    }
}

export const addLocalItem = (id:string):cartType => {
    return {
        type: ADD_LOCAL_ITEM,
        id

    }
}

export const removeLocalItem = (id:string):cartType => {
    return {
        type: REMOVE_LOCAL_ITEM,
        id

    }
}