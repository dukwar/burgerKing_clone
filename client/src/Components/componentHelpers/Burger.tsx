import React from "react";

interface BurgerType {
    onClick: () => void
}

const Burger = ({onClick}:BurgerType) => {


    return (
        <>
           <div onClick={onClick} className="burger">
               <div className="burger__item"/>
               <div className="burger__item"/>
               <div className="burger__item"/>
           </div>

        </>

    )
}

export default Burger