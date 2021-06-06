import {ADD_LOCAL_ITEM, ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM, REMOVE_LOCAL_ITEM} from "../constants";

export const addPizzaToCart = (pizzaObj) => {
    return {
        type: ADD_PIZZA_CART,
        payload: pizzaObj
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