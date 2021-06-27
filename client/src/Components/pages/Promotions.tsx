import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useTypesSelector} from "../../hooks/useTypesSelector";
import 'react-lazy-load-image-component/src/effects/opacity.css';


const Promotions = () => {

    const promoItems = useTypesSelector(({promo}) => promo.promo)

    return (
        <>
            <div className="promo">
                <div className="containerMain">
                    <h1>Promo</h1>
                    <div className="promo__inner">
                        {promoItems.map((item => {
                            return <>

                                <LazyLoadImage
                                    key={item.id}
                                    src={item.img}
                                    effect='opacity'
                                    id={'imgRef'}
                                    className="promo__item"
                                    alt=""/>
                            </>
                        }))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Promotions