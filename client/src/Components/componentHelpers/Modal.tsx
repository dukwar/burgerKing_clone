import React from "react";
import Portal from "./Portal";
import {useSelector} from "react-redux";
import {useTypesSelector} from "../../hooks/useTypesSelector";

interface ModalType {
    children: React.ReactNode
}

const Modal = ({children}:ModalType) => {

    const isOpenDrop = useTypesSelector(({auth}) => auth.isOpen)

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