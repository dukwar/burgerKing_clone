import {useCallback, useState} from "react";


export const useRequest = () => {


    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {


        try {
            setLoading(true)
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const res = await fetch(url, {method, body, headers})
            const data = await res.json()

            console.log(data)
            setMessage(data.message)

            if (!res.ok) {
                throw new Error(data.message || 'Запрос не прошел')
            }

            setLoading(false)
            return data


        } catch (e) {
            setMessage(e.message)
            setLoading(false)
            console.log(e.message)


        }


    }, [])


    return {request, message}
}