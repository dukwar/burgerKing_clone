import React, {useEffect, useRef} from "react";
import SwiperCore, {Controller, Navigation, Pagination, Scrollbar, EffectFlip, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import "./homeSwiper.scss"
import 'swiper/swiper-bundle.css';
import {HomeSlideData} from "./HomeSwiper.dt";



SwiperCore.use([Navigation, Pagination, Scrollbar, Controller, EffectFlip, Autoplay]);


export default function HomeSwiper() {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    useEffect(() => {
        const res:HTMLDivElement[] = []
        const classes = ['btn-arrow-left', 'btn-arrow-right']
        const elPrev:HTMLElement | null = document.getElementById('home-slider-btn-prev')
        const elNext:HTMLElement | null = document.getElementById('home-slider-btn-next')
        res.push(elPrev as HTMLDivElement, elNext as HTMLDivElement)

        for (let i = 0; i < res.length; i++) {
            const elSpan = document.createElement('span')
            console.log(elSpan)
            const span = res[i].appendChild(elSpan)
            span.classList.add(classes[i])
        }
    }, [])

    return (

        <div>
            <div className="swiper2-container">
                <div id="home-slider-btn-prev" className="swiperHome-button-prev" ref={navigationPrevRef} />
                <div id="home-slider-btn-next" className="swiperHome-button-next" ref={navigationNextRef} />
                <Swiper
                    breakpoints={{

                        240: {
                          slidesPerView: 2.8
                        },

                        560: {

                            slidesPerView: 2.6,
                            spaceBetween: 0,
                        },
                    }}
                    className='swiper2'
                    spaceBetween={0}
                    slidesPerView={2.6}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}

                    onInit={(swiper:any) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}

                    speed={1000}
                >
                    {HomeSlideData.map(({id, img}, index) => {
                        return  <SwiperSlide key={`homeSlide - ${id}`}>
                            <img className="swiper-img home-slide" src={img} alt=""/>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>

    );
}