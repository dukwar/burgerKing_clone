import React, {useEffect} from 'react';
import classNames from "classnames";
import {useFixed} from "../../hooks/fixed.hook";
import Category from "../Category/Category";
import {useRequest} from "../../hooks/request.hook";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {useBurgersActions} from "../../hooks/useActions";
import {useScrollTopMenu} from "../../hooks/scrollMenu.hook";




function Home() {

    const {getCategories} = useBurgersActions()
    const {fixed} = useFixed()
    const {request} = useRequest()
    const {handleOffset, activeLi} = useScrollTopMenu()
    const categories = useTypesSelector(({burgers}) => {
        return burgers?.categories
    })
    const burgers = useTypesSelector(({burgers}) => {
        return burgers?.burgers
    })

    useEffect(() => {
        getCategories(request)
    }, [request])


    const classes = classNames(
        "content__top",
        {"fixedBlock": fixed}
    )

    return (
        <>
            <div className={classes}>
                <div className="containerMain">
                    <div id="contentMenu" className="content__top__menu">
                        <ul id="scrollUl">
                            {categories && categories.map(({name}, index) => {
                                return <li key={`catMenu-${index}`} className={activeLi === name ? "activeLi" : ""}
                                           onClick={() => handleOffset(name)}>{name}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content__mid">
                <div className="content__mid__title">
                    <h1>Menu</h1>
                </div>
                {categories && categories.map((item, index) => {
                    if (burgers && !burgers[item.value]) {
                        return null
                    }
                    return <Category key={`cat-${index}`} id={item.name + index} name={item.name} value={item.value}/>
                })}
            </div>
        </>
    );
}

export default Home