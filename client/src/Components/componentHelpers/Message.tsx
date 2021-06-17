import React from "react";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {useMessageActions} from "../../hooks/useActions";



const Message = () => {

    const {setMessage} = useMessageActions()
    const {isOpen, message} = useTypesSelector(({message}) => message)

    if (isOpen) {
        setTimeout(() => {
            setMessage('', false)
        }, 3000)
    }

    return (
        <>
            <div className={isOpen ? "message active" : "message"}>
                <div className="message__data">
                    <p>{message}</p>
                </div>

            </div>
        </>

    )
}

export default Message