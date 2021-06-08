import React from "react";
import logo from "../../assets/img/logo_burgerKing.png"
import Button from "../Button";
import Modal from "../componentHelpers/Modal";
import {Register} from "../componentHelpers/Registration/register";
import {useDispatch} from "react-redux";
import {openAction} from "../../Redux/actions/auth";


const Auth = () => {

    const dispatch = useDispatch()

    const handleActiveOpen = () => {
        dispatch(openAction())
    }




    return (
        <>

            <div className="auth">
                <div className="auth__background">
                </div>
                <div className="auth__form">
                    <div className="auth__darken"></div>

                    <div className="auth__form__group">
                        <div className="auth__text">
                            <h1>Get ready for the brightest lunch
                                <br/>In my life!</h1>
                            <h2>Join our community now! </h2>
                        </div>
                        <Button onClick={handleActiveOpen} className="button--register">
                            <h3>To come in</h3>
                        </Button>
                    </div>
                </div>
            </div>

            <Modal>
                <Register />
            </Modal>


        </>

    )
}

export default Auth