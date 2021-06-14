import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {setMessage} from "../Redux/actions/message";
import {useRequestType} from "./types";

export interface requestType {
    url: string,
    method: string,
    body?: any,
    headers?: any
}



export const useRequest = ():useRequestType => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {


        try {
            setLoading(true)
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const res = await fetch(url, {method, body, headers})
            if (res.status === 404) {
                throw new Error('Что-то пошло не так, попробуйте позднее!')
            }
            const data = await res.json()

            console.log(data)
            if (!data.burgers && !data.categories) {
                dispatch(setMessage(data.message, true))
            }

            if (!res.ok) {
                throw new Error(data.message || 'Запрос не прошел')
            }

            setLoading(false)
            return data


        } catch (e) {
            if (e.message !== 'Вот ваши бургеры!' && e.message !== 'Все категории!') {
                dispatch(setMessage(e.message, true))
            }
            setLoading(false)
            console.log(e.message)
        }

    }, [])

    return {request}
}