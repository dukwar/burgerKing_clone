import React from "react";
import {vacancyType} from "../../Redux/reducers/types";
import {useWorkActions} from "../../hooks/useActions";


const WSpoiler = ({id, title, subTitleOne, subTitleTwo, markerTextOne, markerTextTwo, isOpen}:vacancyType) => {

    const {openWork} = useWorkActions()
    const handleActiveSpoiler = () => {
       openWork(id)
    }

    return (
        <>
            <div onClick={handleActiveSpoiler} className={isOpen ? "vacancy__item active" : "vacancy__item"}>
                <div  className={isOpen ? "spoiler__title active" : "spoiler__title"}>
                    <h3>{title}</h3>
                    <div className={isOpen ? "spoiler__toggle active" : "spoiler__toggle"}/>
                </div>

                <div className={isOpen ? "spoiler active" : "spoiler"}>
                    <h4>{subTitleOne}</h4>
                    <ul>
                        {markerTextOne && markerTextOne.map((item, index) => {
                            return <li key={`spoilerTextOne-${index}`}>{item}</li>
                        })}
                    </ul>

                    <h4>{subTitleTwo}</h4>
                    <ul>
                        {markerTextTwo && markerTextTwo.map((item, index) => {
                            return <li  key={`spoilerTextTwo-${index}`}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default WSpoiler