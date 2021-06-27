import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {ArrowTop} from "./componentHelpers/Sprites";
import NavDrop from "./componentHelpers/NavbarDrop";

const navItems:navType[] = [
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
        title: 'Акции',
        to: '/promo'

    },

    {
        id: 5,
        title: 'King Club',
        to: '/kingclub'
    },

    {
        id: 7,
        title: 'Все пользователи',
        to: '/users'
    },
]


interface LocationState {
    from: {
        pathname: string;
    };
}

type navType = {
    id: number,
    title: string,
    to: string
}

type fixedProps = {
    fixed: boolean
}



const Navbar = ({fixed}:fixedProps) => {

    const location = useLocation<LocationState>()
    const path = location.pathname
    const [toggle, setToggle] = useState(false)
    const [isOpenNav, setOpenNav] = useState(false)
    const dropRef = useRef(null)

    useEffect(() => {
        if (!fixed) {
            setToggle(false)
        }
    }, [fixed])

    const handleToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleOpenNavDrop)

        return function () {
            window.removeEventListener('mousemove', handleOpenNavDrop)
        }
    }, [])

    const handleOpenNavDrop = (e:any) => {
        e.path && !e.path.includes(dropRef.current) ? setOpenNav(false) : setOpenNav(true)
    }

    return (
        <>
            <nav className="navbarMain">
                {path !== '/home' ?
                    <div className="navBlock">
                        <ul>
                            {navItems.map((item, index) =>
                                <Link to={item.to}>
                                    <li className={path === item.to ? 'active' : ''}>{item.title}
                                    </li>
                                </Link>)}
                            <Link to={'/'}>
                                <li ref={dropRef} onMouseMove={handleOpenNavDrop} className="company__about">О компании
                                    <ArrowTop className="arrow__top"/>
                                    <NavDrop isOpenNav={isOpenNav} />
                                </li>
                            </Link>
                        </ul>
                    </div>
                    :
                    <>
                        {fixed && toggle ?
                            <div className="navBlock">
                                <ul>
                                    {navItems.map((item, index) =>
                                        <Link to={item.to}>
                                            <li className={path === item.to ? 'active' : ''}>{item.title}
                                            </li>
                                        </Link>)}
                                    <Link to={'/'}>
                                        <li ref={dropRef} onMouseMove={handleOpenNavDrop} className="company__about">О компании
                                            <ArrowTop className='arrow__top'/>
                                            <NavDrop isOpenNav={isOpenNav} />
                                        </li>
                                    </Link>
                                </ul>

                                <div onClick={handleToggle} className="navbarMain__toggler">
                                    <div className="toggler__dot">
                                        <div/>
                                        <div/>
                                        <div/>
                                    </div>
                                    <p>Меню</p>
                                </div>
                            </div>
                            :
                            <SwitchTransition mode={'out-in'}>
                                <CSSTransition
                                    key={fixed as any}
                                    timeout={500}
                                    classNames="navbarAnima"
                                >
                                    {!fixed ?
                                        <div className="navBlock">
                                            <ul>
                                                {navItems.map((item, index) =>
                                                    <Link to={item.to}>
                                                        <li className={path === item.to ? 'active' : ''}>{item.title}
                                                        </li>
                                                    </Link>)}
                                                <Link to={'/'}>
                                                    <li ref={dropRef} onMouseMove={handleOpenNavDrop} className="company__about">О компании
                                                        <ArrowTop className='arrow__top'/>
                                                        <NavDrop isOpenNav={isOpenNav} />
                                                    </li>
                                                </Link>
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