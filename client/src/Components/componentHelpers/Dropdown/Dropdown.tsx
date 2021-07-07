import React from "react";
import classNames from "classnames";
import DropdownFooter from "./DropdownFooter";
import DropdownMenu from "./DropdownMenu";

interface DropdownType {
    isOpen: boolean,
    handleOpenDropdown: () => void
}

const Dropdown = ({isOpen, handleOpenDropdown}: DropdownType) => {

    const handleClose = () => {
        handleOpenDropdown()
    }

    const classes = classNames(
        "dropdownWindow",
        {"show": isOpen}
    )

    return (
        <>
            <div className={classes}>
               <DropdownMenu handleClose={handleClose} />
               <DropdownFooter />
            </div>
            {isOpen &&
            <div className="dropdown__container">
            </div>
            }
        </>
    )
}

export default Dropdown