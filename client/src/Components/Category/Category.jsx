import React, {useEffect} from "react";
import {getBurgers} from "../../Redux/actions/burgers";
import {useRequest} from "../../hooks/request.hook";
import {useDispatch, useSelector} from "react-redux";
import CategoryItem from "./CategoryItem";


const Category = ({name, value}) => {

    // console.log('CATEGORY RENDER')

    const {request} = useRequest()
    const dispatch = useDispatch()

    const burgers = useSelector(({burgers}) => {
        let burgersTo = ''
        if (burgers?.burgers) {
            burgersTo = burgers.burgers[value]
        }
        return burgersTo

    })


    useEffect(() => {
        dispatch(getBurgers(request, value))
    }, [dispatch, request, value])


    return (
        <>
            <div className="category">
                <h2 id={name} className="category__title">{name}</h2>
                <div className="category__items">

                    {burgers && burgers.map(({_id, name, picture, price}) => {
                        return <CategoryItem id={_id} name={name} picture={picture} price={price}/>
                    })}
                </div>
            </div>

        </>

    )
}

export default Category