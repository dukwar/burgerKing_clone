import React from "react";
import classNames from "classnames";


const Dropdown = ({isOpen}) => {


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
                            <li>
                                <h3>Меню</h3>
                            </li>

                            <li>
                                <h3>Купоны</h3>
                            </li>

                            <li>
                                <h3>King Club</h3>
                            </li>

                            <li>
                                <h3>Обратная связь</h3>
                            </li>

                            <li>
                                <h3>Работа</h3>
                            </li>
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