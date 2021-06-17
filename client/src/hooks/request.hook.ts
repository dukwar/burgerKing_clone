import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {setMessage} from "../Redux/actions/message";
import {useRequestType} from "./types";
import axios from "axios";
import {profileType} from "../Redux/reducers/types";



export const useRequest = ():useRequestType => {

    const dispatch = useDispatch()
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        const $api  = axios.create({
            withCredentials: true,
            method: method
        })

        $api.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${localStorage.getItem('userData')}`
            return config
        })

        $api.interceptors.response.use((config) => {
            return config
        }, async (err) => {
            const originalRequest = err.config
            if (err.response.status === 401 && err.config && !err.config._isRetry) {
                originalRequest._isRetry = true

                try {
                    const res = await axios.get<profileType>('/api/auth/refresh', {withCredentials: true})
                    localStorage.setItem('userData', res.data.accessToken)
                    return $api.request(originalRequest)

                } catch (e) {
                    console.log('Не авторизован!')

                }
            }
            throw err
        })


        try {

            const res = await $api(url, {data: body})

            if (res.status !== 200) {
                throw new Error(res.data.message || 'Что-то пошло не так, попробуйте позднее!')
            }

            console.log(res.data)
            if (!res.data.burgers && !res.data.categories) {
                dispatch(setMessage(res.data.message, true))
            }


            return res.data


        } catch (e) {
            if (e.message !== 'Вот ваши бургеры!' && e.message !== 'Все категории!') {
                dispatch(setMessage(e.message, true))
            }

            console.log(e.message)
        }

    }, [])

    return {request}
}