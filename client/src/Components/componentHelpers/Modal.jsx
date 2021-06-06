import React from "react";
import Portal from "./Portal";
import {useSelector} from "react-redux";


const Modal = ({children}) => {

    const {isOpenDrop} = useSelector(({auth}) => {
        return {
            isOpenDrop: auth.isOpen
        }
    })

    if (isOpenDrop) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }

    return (
        <>
            {isOpenDrop &&
            <Portal>
                <div className="modalMain">
                    <div className="modalMain__window">
                        {children}
                    </div>
                </div>
            </Portal>
            }
        </>
    )
}

export default Modal