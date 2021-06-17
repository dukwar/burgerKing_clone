import {
    ADD_BURGER_CART, ADD_LOCAL_ITEM,
    AUTH_ACTION,
    CLEAR_CART, FETCH_USERS,
    OPEN_ACTION,
    REMOVE_CART_ITEM, REMOVE_LOCAL_ITEM, SET_BURGERS, SET_BURGERS_ALL, SET_CATEGORIES, SET_LOADED,
    SET_MESSAGE,
    SET_OPEN_VACANCY
} from "../constants";
import {burgerApiType, burgersTypes, burgerType, categoryType, messageInnerType, profileType} from "../reducers/types";
import {authAction} from "./auth";
import {Dispatch} from "redux";


// usersType

export interface fetchUsersType {
    type: typeof FETCH_USERS,
    payload: IUserApi
}

export interface IUserApi {
    users: IUser[],
    message: string
}

export interface IUser {
    email: string,
    isActivated: boolean,
    _id: string
}

// authType
export interface authActionType {
    type: typeof AUTH_ACTION,
    profile: profileType,
    isAuth: boolean
}

export interface openActionType {
    type: typeof OPEN_ACTION,
}

export type AuthActionTypes = authActionType | openActionType


// messageType
export interface setMessageType {
    type: typeof SET_MESSAGE,
    payload: messageInnerType
}

export type messageType = setMessageType


// workType
export interface openWorkType {
    type: typeof SET_OPEN_VACANCY,
    id: number
}

export type workType = openWorkType


// Cart type
export interface addBurgerToCartType {
    type: typeof ADD_BURGER_CART,
    payload: burgerType
}

export interface clearCartType {
    type: typeof CLEAR_CART,
}

export interface removeCartItemType {
    type: typeof REMOVE_CART_ITEM,
    id: string
}

export interface addLocalItemType {
    type: typeof ADD_LOCAL_ITEM,
    id: string
}

export interface removeLocalItemType {
    type: typeof REMOVE_LOCAL_ITEM,
    id: string
}

export type cartType = addBurgerToCartType | clearCartType | removeCartItemType | addLocalItemType | removeLocalItemType


// burgers type

export interface setBurgersType {
    type: typeof SET_BURGERS,
    payload: burgerApiType[]
}

export interface setCategoriesType {
    type: typeof SET_CATEGORIES,
    payload: categoryType[]
}

export interface setBurgersAllType {
    type: typeof SET_BURGERS_ALL,
    payload: burgerApiType[]
}

export type burgersTypeAction = setBurgersType | setCategoriesType | setBurgersAllType



export type ActionTypes = ReturnType<typeof authAction>
type DispatchType = Dispatch<ActionTypes>



