import React from "react";
import {useDispatch} from "react-redux";
import {openWork} from "../../Redux/actions/work";



const WSpoiler = ({id, title, subTitleOne, subTitleTwo, markerTextOne, markerTextTwo, isOpen}) => {

    const dispatch = useDispatch()
    const handleActiveSpoiler = () => {
        dispatch(openWork(id))
    }

    return (
        <>
            <div onClick={handleActiveSpoiler} className={isOpen ? "vacancy__item active" : "vacancy__item"}>
                <div  className={isOpen ? "spoiler__title active" : "spoiler__title"}>
                    <h3>{title}</h3>
                    <div className={isOpen ? "spoiler__toggle active" : "spoiler__toggle"}></div>
                </div>

                <div className={isOpen ? "spoiler active" : "spoiler"}>
                    <h4>{subTitleOne}</h4>
                    <ul>
                        {markerTextOne && markerTextOne.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>

                    <h4>{subTitleTwo}</h4>
                    <ul>
                        {markerTextTwo && markerTextTwo.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
            </div>


        </>

    )
}

export default WSpoiler