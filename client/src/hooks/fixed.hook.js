import {useEffect, useState} from "react";

export const useFixed = () => {

    const [fixed, setFixed] = useState(false)

    const scrollHandler = () => {
        if (document.documentElement.scrollTop > 410) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

        return function () {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return {fixed}

}