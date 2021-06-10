import {
    ADD_BURGER_CART,
    ADD_LOCAL_ITEM,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    REMOVE_LOCAL_ITEM
} from "../constants";

export const addBurgerToCart = (burgerObj) => {
    return {
        type: ADD_BURGER_CART,
        payload: burgerObj
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,

    }
}

export const removeCartItem = (id) => {
    return {
        type: REMOVE_CART_ITEM,
        id

    }
}

export const addLocalItem = (id) => {
    return {
        type: ADD_LOCAL_ITEM,
        id

    }
}

export const removeLocalItem = (id) => {
    return {
        type: REMOVE_LOCAL_ITEM,
        id

    }
}