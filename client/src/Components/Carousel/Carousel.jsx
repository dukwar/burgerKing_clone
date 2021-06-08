import React from "react";
import InfiniteCarousel from 'react-leaf-carousel';


const Slider = () => {


    return (
        <div className="slider__container">

            <div className="sliderMain">
                <InfiniteCarousel
                    breakpoints={[

                        {
                            breakpoint: 654,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,

                            },
                        },


                    ]}
                    dots={false}
                    showSides={true}
                    sidesOpacity={1}
                    sideSize={.110}
                    slidesToScroll={1}
                    slidesToShow={2}
                    scrollOnDevice={true}
                    swipe={true}
                    animationDuration={1000}

                >
                    <div className="sliderMain__block">
                        <img
                            alt=''
                            src='https://burgerking.ru/uploads/media/action_preview/0001/36/thumb_35336_action_preview_desktop_webp.webp'
                        />
                    </div>

                    <div className="sliderMain__block">
                        <img
                            alt=''
                            src='https://burgerking.ru/uploads/media/action_preview/0001/35/thumb_34068_action_preview_desktop_webp.webp'
                        />
                    </div>

                    <div className="sliderMain__block">
                        <img
                            alt=''
                            src='https://burgerking.ru/uploads/media/action_preview/0001/33/thumb_32519_action_preview_desktop_webp.webp'
                        />
                    </div>

                    <div className="sliderMain__block">
                        <img
                            alt=''
                            src='https://burgerking.ru/uploads/media/action_preview/0001/03/thumb_2358_action_preview_desktop_webp.webp'
                        />
                    </div>

                    <div className="sliderMain__block">
                        <img
                            alt=''
                            src='https://burgerking.ru/uploads/media/action_preview/0001/35/thumb_34232_action_preview_desktop_webp.webp'
                        />
                    </div>

                    <div className="sliderMain__block">
                        <img
                            alt=''
                            src='https://burgerking.ru/uploads/media/action_preview/0001/06/thumb_5420_action_preview_desktop_webp.webp'
                        />
                    </div>


                </InfiniteCarousel>
            </div>

        </div>
    )


}

export default Slider