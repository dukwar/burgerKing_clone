import React, {useEffect, useState, useRef} from 'react';
import classNames from "classnames";
import {useFixed} from "../../hooks/fixed.hook";
import Category from "../Category/Category";
import {useRequest} from "../../hooks/request.hook";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {useBurgersActions} from "../../hooks/useActions";


interface HandleOffsetParams {
    target: HTMLLIElement
    name: string
    index: number
}

function Home() {

    const {getCategories} = useBurgersActions()
    const [activeLi, setActiveLi] = useState<string>('Beef burgers')
    const {fixed} = useFixed()
    const {request} = useRequest()


    const categories = useTypesSelector(({burgers}) => {
        return burgers?.categories
    })


    const handleActive = () => {
        setTimeout(() => {
            const elems = document.getElementsByClassName('category__title')
            const items = Object.values(elems)

            items.forEach(item => {
                const offsetItem = item.getBoundingClientRect().top
                if (offsetItem <= 180) {
                    const name = item.innerHTML
                    setActiveLi(name)
                }
            })
        }, 500)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleActive)

        return function () {
            document.removeEventListener('scroll', handleActive)
        }
    }, [])

    const handleOffset = ({target, name}: HandleOffsetParams): void => {
        setActiveLi(name)
        const offset = target.offsetLeft
        const elScroll = document.getElementById("scrollUl")
        const elOffset = document.getElementById(name)

        const scrollTop = document.documentElement.scrollTop
        const menuHeight = scrollTop > 430 ? 70 : 0
        if (elOffset) {
            const topOffsetEl = elOffset.getBoundingClientRect().top + menuHeight + scrollTop - 230
            window.scrollTo({top: topOffsetEl, behavior: "smooth"})
        }
        if (elScroll) {
            setTimeout(() => {
                elScroll.scrollTo({left: offset - 50, behavior: "smooth"})
            }, 1000)
        }
    }

    useEffect(() => {
        getCategories(request)
    }, [request])


    const classes = classNames(
        "content__top",
        {"fixedBlock": fixed}
    )

    return (
        <>
            <div className={classes}>
                <div className="containerMain">
                    <div id="contentMenu" className="content__top__menu">
                        <ul id="scrollUl">
                            {categories && categories.map(({name}, index) => {
                                return <li className={activeLi === name ? "activeLi" : ""}
                                           onClick={({target}) => handleOffset({
                                               target,
                                               name,
                                               index
                                           } as HandleOffsetParams)}>{name}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content__mid">
                <div className="content__mid__title">
                    <h1>Menu</h1>
                </div>
                {categories && categories.map((item, index) => {
                    console.log(item.name)
                    return <Category id={item.name + index} name={item.name} value={item.value}/>
                })}
            </div>
        </>
    );
}

export default Home;