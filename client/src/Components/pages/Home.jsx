import React, {useEffect, useRef, useState} from 'react';
import classNames from "classnames";
import {useFixed} from "../../hooks/fixed.hook";
import Category from "../Category/Category";
import {useRequest} from "../../hooks/request.hook";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../Redux/actions/burgers";
import Preloader from "../componentHelpers/Preloader/Preloader";


function Home() {

    const [loading, setLoading] = useState(true)
    const [activeLi, setActiveLi] = useState(0)
    const {fixed} = useFixed()

    const {request} = useRequest()
    const dispatch = useDispatch()
    const ulRef = useRef()

    const {categories} = useSelector(({burgers}) => {
        return {
            categories: burgers?.categories
        }
    })

    const handleOffset = ({target}, name, index) => {
        setActiveLi(index)
        const offset = target.offsetLeft
        const elScroll = document.getElementById("scrollUl")
        const elOffset = document.getElementById(name)
        const scrollTop = document.documentElement.scrollTop
        const menuHeight = scrollTop > 430 ? 70 : 0
        const topOffsetEl = elOffset.getBoundingClientRect().top + menuHeight + scrollTop - 230

        window.scrollTo({top: topOffsetEl, behavior: "smooth"})

        setTimeout(() => {
            elScroll.scrollTo({left: offset - 50, behavior: "smooth"})
        }, 1000)
    }

    useEffect(() => {
        dispatch(getCategories(request))
    }, [dispatch, request])


    setTimeout(() => {
        setLoading(false)

    }, 2000)

    if (loading) {
        return <Preloader/>
    }

    const classes = classNames(
        "content__top",
        {"fixedBlock": fixed}
    )

    return (
        <>


            <div className={classes}>
                <div className="containerMain">
                    <div className="content__top__menu">
                        <ul id="scrollUl" ref={ulRef}>
                            {categories.map(({name}, index) => {
                                return <li className={activeLi === index && "activeLi"}
                                           onClick={(el) => handleOffset(el, name, index)}>{name}</li>
                            })}

                        </ul>
                    </div>
                </div>
            </div>
            <div className="content__mid">
                <div className="content__mid__title">
                    <h1>Menu</h1>
                </div>
                {categories && categories.map((item) => {
                    return <Category name={item.name} value={item.value}/>
                })}
            </div>
        </>


    );
}

export default Home;