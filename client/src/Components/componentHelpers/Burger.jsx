import React from "react";



const Burger = ({onClick}) => {




    return (
        <>
           <div onClick={onClick} className="burger">
               <div className="burger__item"></div>
               <div className="burger__item"></div>
               <div className="burger__item"></div>

           </div>

        </>

    )
}

export default Burger