import {CSSTransition, SwitchTransition} from "react-transition-group";
import Button from "../../Button";
import React, {useEffect, useState} from "react";
import {useRequest} from "../../../hooks/request.hook";
import {useFormik} from "formik";
import {authThunk, openAction} from "../../../Redux/actions/auth";
import {Cancel} from "../Sprites";
import {useAuth} from "../../../hooks/auth.hook";
import {useTypesSelector} from "../../../hooks/useTypesSelector";
import {useAuthActions} from "../../../hooks/useActions";

export const Register = () => {

    const {request} = useRequest()
    const profile = useTypesSelector(({auth}) => {
        return auth.profile
    })

    const {login} = useAuth()
    const {authThunk, openAction} = useAuthActions()
    const [activeBut, setActiveBut] = useState<boolean>(true)
    const [toggle, setToggle] = useState<boolean>(true)
    const [method, setMethod] = useState<string>('')


    const handleActiveBut = () => {
        setToggle(!toggle)
        setActiveBut(!activeBut)
    }
    const handleMethod = (e: React.MouseEvent<HTMLButtonElement>, id: string | undefined): void => {
        if (typeof id === "string") {
            const el = document.getElementById(id)
            if (el) {
                const data = el.getAttribute('data')
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
            toggle: ''
        },
        onSubmit: (values) => {
            openAction()
            alert(JSON.stringify(values, null, 2));
            authThunk(request, method, values, login)
        }
    })

    useEffect(() => {
        setTimeout(() => {
            if (formik.values.email !== '' || formik.values.password !== '') {
                window.M.updateTextFields()
            }
        }, 600)
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
                    timeout={500}
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
                                                value={formik.values.toggle}
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