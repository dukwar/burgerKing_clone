import React from "react";
import {Facebook, Instagram, Vkontakte, Youtube} from "../Sprites";


const DropdownFooter = () => {


    return (
        <>
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

        </>

    )
}

export default DropdownFooter