import {useEffect, useState} from "react";

export const useFixed = () => {

    const [fixed, setFixed] = useState<boolean>(false)
    let offsetTop = 0

    function handleResize() {
        const menu:HTMLElement | null = document.getElementById('contentMenu')
        const slider:HTMLElement | null = document.getElementById('sliderId2')
        const sliderHeight = slider?.offsetHeight
        if (menu && sliderHeight) {
                offsetTop = 50 + sliderHeight

        }
    }

    function scrollHandler() {
            if (document.documentElement.scrollTop > offsetTop) {
                setFixed(true)
            } else {
                setFixed(false)
            }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return function () {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            handleResize()
        }, 100)

    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

        return function () {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return {fixed}

}