import React from 'react';
import {Button} from "../index";
import WSpoiler from "../WorkSpoiler/WSpoiler";
import {useSelector} from "react-redux";




function Work() {

    const workData = useSelector(({work}) => {
        return work.vacancy
    })


    return (
        <>
            <div className="containerMain">
                <section className="work">
                    <div className="work__content">
                        <h1>WE HAVE A JOB FOR YOU</h1>
                        <p>Fill out the form and become a part of the Burger King team!</p>
                        <Button>Отправить заявку</Button>
                    </div>
                    <div className="img__container">
                        <div className="work__img">
                            <img src="https://burgerking.ru/images/vacancies/imgWoman.png" alt=""/>
                        </div>
                    </div>

                </section>
            </div>

            <section className="vacancy">
                <div className="vacancy__inner">
                    <h2>Our vacancies</h2>
                    <div className="vacancy__list">
                        {workData
                            .map(({id, title, subTitleOne, subTitleTwo, markerTextOne, markerTextTwo, isOpen}) => {
                            return <WSpoiler
                                id={id}
                                title={title}
                                subTitleOne={subTitleOne}
                                subTitleTwo={subTitleTwo}
                                markerTextOne={markerTextOne}
                                markerTextTwo={markerTextTwo}
                                isOpen={isOpen}

                            />
                        })}
                    </div>
                </div>


            </section>
        </>


    );
}

export default Work;