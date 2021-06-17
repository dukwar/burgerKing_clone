import React from "react";
import {addBurgerToCart} from "../../Redux/actions/cart";
import {useCartActions} from "../../hooks/useActions";
import {CategoryItemType} from "../../Redux/reducers/types";
import Button from "../Button";


const CategoryItem = React.memo(({_id, name, picture, price}: CategoryItemType) => {

    const {addBurgerToCart} = useCartActions()

    const obj = {
        _id,
        name,
        picture,
        price
    }

    const handleAddCart = () => {
        addBurgerToCart(obj)
    }


    return (

        <>

            <div className="category__item">
                <div className="item__img">
                    <img src={picture} alt=""/>
                </div>
                <div className="item__content">
                    <div className="item__title"><h3>{name.toUpperCase()}</h3></div>
                    <Button onClick={handleAddCart} className="button--item">
                                <span className="price">
                                    <p className="price__number">{price}.<p>99</p></p>
                                    <p className="price__nom">₽</p>
                                </span>
                        <span className="price__plus"><p>+</p></span>
                    </Button>
                </div>
            </div>


        </>
    )
})

export default CategoryItem