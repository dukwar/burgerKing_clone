import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {CSSTransition, SwitchTransition} from "react-transition-group";

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


const Navbar = ({fixed}) => {

    const location = useLocation()
    const path = location.pathname
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (!fixed) {
            setToggle(false)
        }
    }, [fixed])

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <nav className="navbarMain">
                {path !== '/home' ?
                    <div className="navBlock">
                        <ul>
                            {navItems.map((item, index) =>
                                <Link to={item.to}>
                                    <li className={path === item.to && 'active'}>{item.title}
                                    </li>
                                </Link>)}
                        </ul>
                    </div>
                    :
                    <>
                        {fixed && toggle ?
                            <div className="navBlock">
                                <ul>
                                    {navItems.map((item, index) =>
                                        <Link to={item.to}>
                                            <li className={path === item.to && 'active'}>{item.title}
                                            </li>
                                        </Link>)}
                                </ul>

                                <div onClick={handleToggle} className="navbarMain__toggler">
                                    <div className="toggler__dot">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <p>Меню</p>
                                </div>
                            </div>

                            :
                            <SwitchTransition mode={'out-in'}>
                                <CSSTransition
                                    key={fixed}
                                    timeout={500}
                                    classNames="navbarAnima"
                                >
                                    {!fixed ?
                                        <div className="navBlock">
                                            <ul>
                                                {navItems.map((item, index) =>
                                                    <Link to={item.to}>
                                                        <li className={path === item.to && 'active'}>{item.title}
                                                        </li>
                                                    </Link>)}
                                            </ul>
                                        </div>


                                        :
                                        <div className="navBlock">
                                            <ul>
                                                <li>Самовывоз</li>
                                                <li>Выбрать ресторан</li>
                                            </ul>
                                            <div onClick={handleToggle} className="navbarMain__toggler">
                                                <div className="toggler__dot">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <p>Меню</p>
                                            </div>
                                        </div>
                                    }
                                </CSSTransition>
                            </SwitchTransition>

                        }
                    </>

                }


            </nav>

        </>
    )
}

export default Navbar