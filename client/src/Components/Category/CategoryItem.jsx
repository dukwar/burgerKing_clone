import React from "react";
import {Button} from "../index";
import {useDispatch} from "react-redux";
import {addBurgerToCart} from "../../Redux/actions/cart";


const CategoryItem = React.memo(({id, name, picture, price}) => {

    const dispatch = useDispatch()

    const obj = {
        id,
        name,
        picture,
        price
    }

    const handleAddCart = () => {
        dispatch(addBurgerToCart(obj))

    }

    // console.log(obj)

    return (
        <>
            <div className="category__item">
                <div className="item__img">
                    <img
                        src={picture}
                        alt=""/>
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