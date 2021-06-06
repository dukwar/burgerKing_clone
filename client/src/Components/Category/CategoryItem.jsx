import React from "react";
import {Button} from "../index";


const CategoryItem = ({name, picture, price}) => {

    return (
        <>
            <div className="category__item">
                <div className="item__img">
                    <img
                        src={picture}
                        alt=""/>
                </div>
                <div className="item__title"><h3>{name}</h3></div>
                <Button className="button--item">
                                <span className="price">
                                    <span className="price__number">{price}.<span>99</span></span>
                                    <span className="price__nom">₽</span>
                                </span>
                    <span className="price__plus"><p>+</p></span>
                </Button>
            </div>

        </>

    )
}

export default CategoryItem