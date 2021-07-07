import React from "react";
import Button from "../Button";
import {burgerApiType} from "../../Redux/reducers/types";

interface AdminDeskType {
    burgers: burgerApiType[],
    handleDelete: (name: string) => void,
    handleActiveOpen: () => void
}

const AdminMobile = ({burgers, handleActiveOpen, handleDelete }:AdminDeskType) => {
    return (
       <>
           <section className="adminMobile">
               <div className="containerMain">
                   <div className="adminMobile__inner">
                       {burgers.map(({ picture, name, price, category}, index) => {
                           return  (
                               <div className="adminMobile__item">
                                   <div className="adminMobile__number">
                                       <h1>#{index + 1}</h1>
                                       <h1>Category #{category}</h1>
                                   </div>
                                   <div className="adminMobile__img">
                                       <img src={picture} alt=""/>
                                   </div>
                                   <div className="adminMobile__title">
                                       <h1>{name}</h1>

                                   </div>
                                   <div className="adminMobile__price">
                                       <h1>{price}  Rub.</h1>
                                   </div>
                                   <div className="adminMobile__button">
                                       <Button className="button--deleteMobileItem" onClick={() => handleDelete(name)}>
                                           Удалить
                                       </Button>
                                   </div>
                               </div>

                           )

                       })}

                       <Button className="button__modalFooter" onClick={handleActiveOpen}><h3>Add burger</h3></Button>

                   </div>
               </div>
           </section>

        </>
    )
}

export default AdminMobile