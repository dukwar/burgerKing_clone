import {CSSTransition, SwitchTransition} from "react-transition-group";
import Button from "../../Button";
import React, {useEffect, useState} from "react";
import {useRequest} from "../../../hooks/request.hook";
import {useFormik} from "formik";
import {Cancel} from "../Sprites";
import {useAuthActions} from "../../../hooks/useActions";

export const Register = () => {

    const {request} = useRequest()
    const {authThunk, openAction} = useAuthActions()
    const [activeBut, setActiveBut] = useState<boolean>(true)
    const [toggle, setToggle] = useState<boolean>(true)
    const [method, setMethod] = useState<string>('')


    const handleActiveBut = () => {
        setToggle(!toggle)
        setActiveBut(!activeBut)
    }
    const handleMethod = (e: React.MouseEvent<HTMLButtonElement>, id: string | undefined): void => {
        if (id) {
            const elInput = document.getElementById(id)
            if (elInput) {
                const data = elInput.getAttribute('data')
                if (data) setMethod(data)
            }
        }
    }

    const handleActiveOpen = () => {
        openAction()
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        onSubmit: (values) => {
            openAction()
            authThunk(request, method, values)
        }
    })

    useEffect(() => {
        const email = formik.values.email
        const password = formik.values.password

        setTimeout(() => {
            if (email !== '' || password !== '') {
                window.M.updateTextFields()
            }
        }, 610)
    }, [toggle, activeBut, formik.values.email, formik.values.password])

    return (
        <>

            <div className="modalMain__header">
                <div className="modalMain__group">
                    <Button onClick={handleActiveBut}
                            className="button--modalHeader" activeBut={activeBut}>
                        <p>Регистрация</p>
                    </Button>

                    <Button onClick={handleActiveBut}
                            className="button--modalHeader" activeBut={!activeBut}>
                        <p>Войти</p>
                    </Button>
                </div>
                <div onClick={handleActiveOpen} className="modalMain__header__cancel">
                    <Cancel className="modalMain__header__cancel"/>
                </div>
            </div>
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={toggle as any}
                    timeout={600}
                    classNames="fade"
                >
                    {toggle ?
                        <div className="modalMain__body">
                            <h1>Fill in all the fields and let's move on!</h1>
                            <form className="regModal" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <h3>Email</h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="email"
                                            type="email"
                                            className="regModal__input"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}

                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <h3>Password</h3>
                                    <div className="input-field col s12">

                                        <input
                                            id="password"
                                            type="password"
                                            className="regModal__input"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>

                                <div className="modalMain__footer">
                                    <div className="accept">
                                        <label>
                                            <input
                                                id="toggle"
                                                type="checkbox"
                                                onChange={formik.handleChange}
                                                // value={formik.values.toggle}
                                            />
                                            <span>Я принимаю условия пользовательского
                                    соглашения и программы лояльности</span>
                                        </label>
                                    </div>
                                    <Button id="regOne" onClick={handleMethod} data="register"
                                            className="button__modalFooter">
                                        <h3>Register now
                                        </h3>
                                    </Button>
                                </div>
                            </form>
                        </div>
                        :
                        <div className={"modalMain__body"}>
                            <h1>Welcome! Try to login!</h1>
                            <form className="regModal" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <h3>Email</h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="email"
                                            type="email"
                                            className="regModal__input"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <h3>Password</h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="password"
                                            type="password"
                                            className="regModal__input"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>

                                <div className="modalMain__footer">
                                    <Button id="logTwo" onClick={handleMethod} data="login"
                                            className="button__modalFooter">
                                        <h3>Login</h3>
                                    </Button>
                                </div>
                            </form>

                        </div>
                    }
                </CSSTransition>
            </SwitchTransition>

        </>


    )
}