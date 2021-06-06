import {SET_BURGERS, SET_BURGERS_ALL, SET_CATEGORIES, SET_LOADED} from "../constants";

export const setLoaded = val => {
    return {
        type: SET_LOADED,
        val
    }
}

const setBurgers = (items) => {
    return {
        type: SET_BURGERS,
        payload: items
    }

}

const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}

const setBurgersAll = (burgers) => {
    return {
        type: SET_BURGERS_ALL,
        payload: burgers
    }
}

export const getCategories = (request) => async (dispatch) => {
    const data = await request('/api/category', 'GET')
    dispatch(setCategories(data?.categories))
}

export const getBurgersAll = (request) => async (dispatch) => {
    const data = await request(`/api/burgers/all`, 'GET')
    dispatch(setBurgersAll(data?.burgers))
}

export const getBurgers = (request, value) => async (dispatch) => {
    const data = await request(`/api/burgers/${value}`, 'GET')
    dispatch(setBurgers(data?.burgers))
}


export const addBurger = (request, values) => async (dispatch) => {
   await request('/api/burgers/generate', 'POST', values)
}

export const addCategory = (request, values) => async (dispatch) => {
   await request('/api/category/generate', 'POST', values)
}

export const deleteBurger = (request, values) => async (dispatch) => {
   await request('/api/burgers/delete', 'POST', values)
}




