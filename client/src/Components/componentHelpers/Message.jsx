import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMessage} from "../../Redux/actions/message";



const Message = () => {
    console.log('MESSAGE RENDER')

    const dispatch = useDispatch()

    const isOpen = useSelector(({message}) => message.isOpen)
    const message = useSelector(({message}) => message.message)


    if (isOpen === true) {
        setTimeout(() => {
            dispatch(setMessage('', false))
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