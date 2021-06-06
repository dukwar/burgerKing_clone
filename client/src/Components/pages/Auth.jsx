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

            <div className="reg row">
                <div className="reg__background col s6">
                    <img src={logo} alt=""/>
                </div>
                <div className="reg__form col s6">
                    <div className="row">
                        <h1 className="col s6 offset-s1">Приготовься к самому яркому обеду<br/> в своей жизни!</h1>
                        <h2 className="col s9 offset-s1">Присоединяйтесь к нашему сообществу прямо сейчас! </h2>
                    </div>



                    <div className="reg__form__group row">
                        <Button onClick={handleActiveOpen} className="button--register col  offset-s1">
                            <h3>Войти</h3>
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