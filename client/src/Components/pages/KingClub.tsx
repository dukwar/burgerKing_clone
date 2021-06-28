import React, {useEffect, useState} from "react";
import burgerRobot from "../../assets/img/topKingClubimg.png"
import Button from "../Button";
import ClubSwiper from "../componentHelpers/ClubSwiper/ClubSwiper";

// @ts-ignore
import {jarallax} from 'jarallax';

const KingClub = () => {

    const [mobileSize, setSize] = useState(false)

    const handleResize = () => {
        const size = window.innerWidth
        console.log(size)
        if (size < 1025) {
            setSize(true)
        } else {
            setSize(false)
        }
    }

    useEffect(() => {
        handleResize()
    }, [])

    useEffect(() => {
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2
        });
        window.addEventListener('resize', handleResize)

        return function () {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            <div className="club">
                <div className="club__top jarallax" data-jarallax data-speed="0.2">
                    <div className="top__content">
                        <div className="top__title">
                            <h1>New bonus program</h1>
                            <h2>Burger king app</h2>
                        </div>

                            <img src={burgerRobot} alt=""/>

                    </div>
                </div>

                <div className="club__instruction">
                    <section className="containerMain">

                        <div className="instruction">
                            <div className="instruction__title">
                                <h1>Combo with Whopper® for only 1 ruble</h1>

                            </div>
                            <div className="instruction__card">
                                <div className="card__item">
                                    <img src="https://burgerking.ru/images/kingclub/step_1.png" alt=""/>
                                    <p>Зарегистрируйся в приложении и получи 100 корон в подарок</p>
                                </div>
                                <div className="card__item">
                                    <img src="https://burgerking.ru/images/kingclub/step_2.png" alt=""/>
                                    <p>Еще 350 корон мы начислим за первый заказ от 499 ₽</p>
                                </div>
                                <div className="card__item">
                                    <img src="https://burgerking.ru/images/kingclub/step_3.png" alt=""/>
                                    <p>Обменяй 450 корон на комбо с Воппером®</p>
                                </div>

                            </div>
                            <div className="instruction__button">
                                <Button className="button--instruction">
                                    <h2>  I want!</h2>
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="club__welcome">
                    <section className="containerMain">
                        <div className="welcome">
                            <h1>Welcome to the club!</h1>
                            <p>KING CLUB — бонусная программа Бургер Кинг, в которой все получают за еду короны, а потом обменивают короны на новую еду!</p>
                            <p>Короны — наши новые баллы. Копить короны очень легко: мы начисляем их за любые заказы в приложении, а выполняя несложные челленджи можно получать дополнительные короны. Самое главное: короны нужны для того, чтобы обменивать их на вкусные подарки — от наггетсов и кофе до сытных комбо с премиальными бургерами!</p>

                            {mobileSize  ?
                                <div className="welcome__bonus">
                                    <div className="bonus__item">
                                        <img src="https://burgerking.ru/images/kingclub/benefit_1_mobile.png" alt=""/>
                                    </div>
                                    <div className="bonus__item">
                                        <img src="	https://burgerking.ru/images/kingclub/benefit_2_mobile.png" alt=""/>
                                    </div>
                                    <div className="bonus__item">
                                        <img src="https://burgerking.ru/images/kingclub/benefit_3_mobile.png" alt=""/>
                                    </div>
                                </div>
                                :
                                <div className="welcome__bonus">
                                    <div className="bonus__item">
                                        <img src="https://burgerking.ru/images/kingclub/benefit_1_desktop.png" alt=""/>
                                    </div>
                                    <div className="bonus__item">
                                        <img src="https://burgerking.ru/images/kingclub/benefit_2_desktop.png" alt=""/>
                                    </div>
                                    <div className="bonus__item">
                                        <img src="https://burgerking.ru/images/kingclub/benefit_3_desktop.png" alt=""/>
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                </div>

                <section className="club__choice">
                    <div className="choice">
                        <h1>The more crowned, the more valuable savings are available!</h1>
                        <div className="choice__swiper">
                            <ClubSwiper/>
                        </div>
                        <div className="choice__button"></div>
                    </div>
                </section>

                <section className="club__conditions">
                    <div className="containerMain">
                        
                        <div className="conditions">
                            <div className="conditions__title">
                                <h1>Old points will not be lost</h1>
                                <p>Всем, кто пользуется приложением давно, можно не беспокоиться: при переходе в KING CLUB из предыдущей бонусной программы мы обменяем каждый старый балл на две новые короны.</p>
                                <Button className="button__kingClub">
                                    <h1> Excellent!</h1>
                                </Button>
                            </div>
                            <div className="conditions__img">
                                {mobileSize ?
                                    <img src="	https://burgerking.ru/images/kingclub/migration_inner_mobile.png" alt=""/>
                                    :
                                    <img src="https://burgerking.ru/images/kingclub/migration_inner_desktop.png" alt=""/>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default KingClub