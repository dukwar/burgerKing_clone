import React, {useState} from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, EffectFlip} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import {CrownData, SlideData} from "./ClubSwiperData";
import {Crown} from "../Sprites";


SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFlip]);


export default function ClubSwiper() {

    const [activeSlide, setActiveSlide] = useState(0)

    const handleActiveSlide = (index:any) => {
        setActiveSlide(index.realIndex)
    }
    const handleNavSlide = (index:number) => {
        const swiperEl:any = document.querySelector('.swiper-container')
        let swiper = swiperEl.swiper
        swiper.slideTo(index, 1000)
    }


    return (

        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                speed={1000}
                onSlideChange={(e) => handleActiveSlide(e)}
            >
                {SlideData.map(({id, title, img, text}, index) => {
                    return  <SwiperSlide key={`${title}${id}`}>
                        <img className="swiper-img club-img" src={img} alt=""/>
                        <h1 className="swiper-title">"{title}"</h1>
                        <p className="swiper-text">{text}</p>
                    </SwiperSlide>
                })}
            </Swiper>
            <ul className="choice__crown">
                    {CrownData.map(({id, title}, index) => {
                        return <li onClick={() =>  handleNavSlide(index)} className={activeSlide === index ? "activeCrown" : ""} key={`${title}${id}`}>
                                <span>{title}</span>
                                <Crown className="crown"/>
                            </li>
                    })}
            </ul>
        </>
    );
}