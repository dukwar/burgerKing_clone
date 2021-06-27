import React from "react";
import {Link} from "react-router-dom";
import {menuSideA, menuSideB} from "./DropdownData";


interface DropdownMenuType {
    handleClose: () => void
}

const DropdownMenu = ({handleClose}: DropdownMenuType) => {


    return (
        <>
            <div className="menu">
                <div className="menu__sideA">
                    <ul>
                        {menuSideA.map(({id, title, to}) => {
                            return <Link key={title + id} onClick={handleClose} to={to}>
                                <li>
                                    <h3>{title}</h3>
                                </li>
                            </Link>
                        })}
                    </ul>
                </div>
                <div className="menu__sideB">
                    <ul>
                        {menuSideB.map(({id, title}) => {
                            return <li key={title + id}>
                                <p>{title}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DropdownMenu