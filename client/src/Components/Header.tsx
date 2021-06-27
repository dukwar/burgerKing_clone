import React, {useEffect, useState} from "react";
import Button from "./Button";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import logo from "../assets/img/burger-king-logo.svg";
import Navbar from "./Navbar";
import Burger from "./componentHelpers/Burger";
import Dropdown from "./componentHelpers/Dropdown/Dropdown";
import {useFixed} from "../hooks/fixed.hook";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useAuthActions} from "../hooks/useActions";
import {useRequest} from "../hooks/request.hook";
import {CartImage} from "./componentHelpers/Sprites";


const Header = () => {

    const {fixed} = useFixed()
    const history = useHistory()
    const location = useLocation()
    const {request} = useRequest()
    const {authThunk} = useAuthActions()
    const path = location.pathname

    const {totalPrice, totalCount} = useTypesSelector(({cart}) => cart)
    const [isOpen, setOpen] = useState<boolean>(false)
    const [isVisibleCart, setVisibleCart] = useState<boolean>(true)
    const handleOpenDropdown = () => {
        setOpen(!isOpen)
    }
    const handleVisible = () => {
        const innerW = window.innerWidth
        if (innerW < 654) {
            setVisibleCart(false)
        } else {
            setVisibleCart(true)
        }
    }

    useEffect(() => {
        const el = document.body
        isOpen ? el.style.overflow = 'hidden' : el.style.overflow = 'visible'
    }, [isOpen])

    useEffect(() => {
        const innerW = window.innerWidth
        if (innerW < 654) {
            setVisibleCart(false)
        } else {
            setVisibleCart(true)
        }


        window.addEventListener('resize', handleVisible)

        return function () {
            window.removeEventListener('resize', handleVisible)
        }
    }, [])


    const handleLogout = () => {
        authThunk(request, 'logout', null)
        history.push('/')
    }


    return (
        <>

            <div className="header__outside">
                <div className="headerMain">
                    <div className="headerMain__inner">
                        <NavLink to="/">
                            <div className="headerMain__logo">
                                <img className={fixed && path === "/home" ? "fixed" : '' } src={logo} alt="logo"/>
                            </div>
                        </NavLink>

                        <Navbar fixed={fixed}/>
                        <Burger onClick={handleOpenDropdown}/>
                        <Button className="button--exit" onClick={handleLogout}>
                            <p>Выйти</p>
                        </Button>

                        <div className="headerMain__cart">

                            {isVisibleCart &&
                            <NavLink to="/cart">
                                <Button className="button--cart">
                                    <span>{totalPrice} &#8381;</span>
                                    <div className="button__delimiter"></div>
                                    <CartImage />
                                    <span>{totalCount}</span>
                                </Button>
                            </NavLink>
                            }
                        </div>
                    </div>

                </div>
            </div>
            <Dropdown isOpen={isOpen} handleOpenDropdown={handleOpenDropdown}/>
        </>
    )
}

export default Header