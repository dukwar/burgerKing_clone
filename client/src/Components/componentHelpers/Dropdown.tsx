import React from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";

interface DropdownType {
    isOpen: boolean
}

const Dropdown = ({isOpen}: DropdownType) => {


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
                            <Link to="/home">
                                <li>
                                    <h3>Menu</h3>
                                </li>
                            </Link>
                            <Link to="/admin">
                                <li>
                                    <h3>Add position</h3>
                                </li>
                            </Link>
                            <Link to={'/home'}>
                                <li>
                                    <h3>King Club</h3>
                                </li>
                            </Link>
                            <Link to={'/home'}>
                                <li>
                                    <h3>Contacts</h3>
                                </li>
                            </Link>
                            <Link to="/work">
                                <li>
                                    <h3>Work</h3>
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
            </div>

            {isOpen &&
            <div className="dropdown__container">
            </div>
            }


        </>

    )
}

export default Dropdown