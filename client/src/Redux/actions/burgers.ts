import {SET_BURGERS, SET_BURGERS_ALL, SET_CATEGORIES} from "../constants";
import {
    addBurgerType, addCategoryType,
    burgerApiMainType,
    burgerApiType,
    categoryApiType,
    categoryType
} from "../reducers/types";
import {Dispatch} from "redux";
import {burgersTypeAction} from "./types";

const setBurgers = (items:burgerApiType[]):burgersTypeAction => {
    return {
        type: SET_BURGERS,
        payload: items
    }

}

const setCategories = (categories:categoryType[]):burgersTypeAction => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}

const setBurgersAll = (burgers:burgerApiType[]):burgersTypeAction => {
    return {
        type: SET_BURGERS_ALL,
        payload: burgers
    }
}

export const getCategories = (request: (url:string, method:string, body?:any, headers?:any)  => Promise<categoryApiType>) => async (dispatch:Dispatch<burgersTypeAction>) => {
    const data = await request('/api/category', 'GET')
    dispatch(setCategories(data?.categories))
}

export const getBurgersAll = (request: (url:string, method:string, body?:any, headers?:any) => Promise<burgerApiMainType>) => async (dispatch:Dispatch<burgersTypeAction>) => {
    const data = await request(`/api/burgers/all`, 'GET')
    dispatch(setBurgersAll(data?.burgers))
}

export const getBurgers = (request: (url:string, method:string, body?:any, headers?:any) => Promise<burgerApiMainType>, value:string) => async (dispatch:Dispatch<burgersTypeAction>) => {
    const data = await request(`/api/burgers/${value}`, 'GET')
    dispatch(setBurgers(data?.burgers))
}


export const addBurger = (request: (url:string, method:string, values:addBurgerType, body?:any, headers?:any,) => Promise<any>, values:addBurgerType) => async (dispatch:Dispatch<any>) => {
   await request('/api/burgers/generate', 'POST', values)
}

export const addCategory = (request: (url:string, method:string, values:addCategoryType, body?:any, headers?:any) => Promise<any>, values:addCategoryType) => async (dispatch:Dispatch<any>) => {
   await request('/api/category/generate', 'POST', values)
}

export const deleteBurger = (request: (url:string, method:string, values:string, body?:any, headers?:any) => Promise<any>, values:string) => async (dispatch:Dispatch<any>) => {
   await request('/api/burgers/delete', 'POST', values)
}




