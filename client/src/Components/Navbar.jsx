import React from "react";
import {Link, useLocation} from "react-router-dom";

const navItems = [
    {
        id: 1,
        title: 'Меню',
        to: '/home'
    },

    {
        id: 2,
        title: 'Добавить свою позицию в меню',
        to: '/admin'
    },

    {
        id: 3,
        title: 'Работа',
        to: '/work'

    },

    {
        id: 4,
        title: 'Акции'

    },

    {
        id: 5,
        title: 'Для детей'
    },

    {
        id: 6,
        title: 'Kung Club'
    },

    {
        id: 7,
        title: 'Найти рестораны'
    },
]


const Navbar = () => {

    const location = useLocation()
    const path = location.pathname

    return (
        <>
            <nav className="navbarMain">
                <ul className="navbarMain__list">
                    {navItems.map((item, index) =>
                        <Link to={item.to}>
                            <li className={path === item.to && 'active'}>{item.title}
                            </li>
                        </Link>)}
                </ul>
            </nav>

        </>
    )
}

export default Navbar