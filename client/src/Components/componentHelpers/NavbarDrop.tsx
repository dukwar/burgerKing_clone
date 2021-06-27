import React from "react";

interface navDropType {
    isOpenNav: boolean
}


const NavDrop = ({isOpenNav}: navDropType) => {


    return (
        <>
            {isOpenNav &&
            <nav className="navDrop">
                <ul className="navDrop__menu">
                    <li>О компании</li>
                    <li>Поддержка</li>
                    <li>Любовь</li>
                    <li>Забота</li>
                </ul>
            </nav>
            }
        </>

    )
}

export default NavDrop