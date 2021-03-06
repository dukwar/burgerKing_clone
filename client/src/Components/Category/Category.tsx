import React, {useEffect} from "react"
import {useRequest} from "../../hooks/request.hook"
import CategoryItem from "./CategoryItem"
import {useTypesSelector} from "../../hooks/useTypesSelector"
import {burgerType, categoryType} from "../../Redux/reducers/types"
import {useBurgersActions} from "../../hooks/useActions"


const Category = ({name, value}: categoryType) => {

    const {request} = useRequest()
    const {getBurgers} = useBurgersActions()

    const burgers = useTypesSelector(({burgers}) => {
        if (burgers.burgers) {
            return burgers.burgers[value]
        }
    })

    useEffect(() => {
        getBurgers(request, value)
    }, [request, value])

    return (
        <>
            <div className="category">
                <h2 id={name} className="category__title">{name}</h2>
                <div className="category__items">
                    {burgers && burgers.map(({_id, name, picture, price}: burgerType, index) => {
                        return <CategoryItem key={`catItem-${index}`} _id={_id} name={name} picture={picture} price={price}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Category