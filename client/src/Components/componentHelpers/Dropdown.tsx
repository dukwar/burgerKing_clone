import React from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {Facebook, Instagram, Vkontakte, Youtube} from "./Sprites";

interface DropdownType {
    isOpen: boolean,
    handleOpenDropdown: () => void
}

const Dropdown = ({isOpen, handleOpenDropdown}: DropdownType) => {

    const handleClose = () => {
        handleOpenDropdown()
    }


    const classes = classNames(
        "dropdownWindow",
        {"show": isOpen}
    )

    return (
        <>
            <div className={classes}>
                <div className="menu">
                    <div className="menu__sideA">
                        <ul>
                            <Link onClick={handleClose} to="/home">
                                <li>
                                    <h3>Menu</h3>
                                </li>
                            </Link>
                            <Link onClick={handleClose} to="/admin">
                                <li>
                                    <h3>Add position</h3>
                                </li>
                            </Link>
                            <Link onClick={handleClose} to={'/promo'}>
                                <li>
                                    <h3>Promo</h3>
                                </li>
                            </Link>
                            <Link onClick={handleClose} to="/work">
                                <li>
                                    <h3>Work</h3>
                                </li>
                            </Link>
                            <Link onClick={handleClose} to="/users">
                                <li>
                                    <h3>Users</h3>
                                </li>
                            </Link>
                            <Link onClick={handleClose} to="/cart">
                                <li>
                                    <h3>Cart</h3>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="menu__sideB">

                        <ul>
                            <li>
                                <p>О компании</p>
                            </li>

                            <li>
                                <p>Найти рестораны</p>
                            </li>

                            <li>
                                <p>Обратная связь</p>
                            </li>

                            <li>
                                <p>Для детей</p>
                            </li>

                            <li>
                                <p>Стандарты качества</p>
                            </li>

                            <li>
                                <p>Мобильное приложение</p>
                            </li>

                            <li>
                                <p>Партнёры</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="footer__contacts">
                    <div className="sideB">
                        <div className="sideB__img"><img
                            src="https://burgerking.ru/images/app_store.svg"
                            alt="App Store"/></div>
                        <div className="sideB__img">
                            <img src="https://burgerking.ru/images/google_play.png"
                                 alt="Google Play"/></div>
                        <div className="sideB__img"><img
                            src="https://burgerking.ru/images/huawei.png"
                            alt="Huawei App Gallery"/></div>
                    </div>

                </div>
                <div className="footer__social">
                    <div className="social">
                        <Instagram className="social__item"/>
                    </div>
                    <div className="social">
                        <Facebook className="social__item"/>
                    </div>
                    <div className="social">
                        <Vkontakte className="social__item"/>
                    </div>
                    <div className="social">
                        <Youtube className="social__item"/>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="roots">
                        <p>
                            © ООО «Бургер Рус», 2021. Все права защищены.<br/>
                            TM & Copyright 2021 Burger King Corporation. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>


            {isOpen &&
            <div className="dropdown__container">
            </div>
            }


        </>

    )
}

export default Dropdown