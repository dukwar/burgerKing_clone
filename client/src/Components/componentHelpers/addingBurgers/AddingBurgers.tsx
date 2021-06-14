import Button from "../../Button";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useRequest} from "../../../hooks/request.hook";
import {useFormik} from "formik";
import {openAction} from "../../../Redux/actions/auth";
import {Cancel} from "../Sprites";
import {addBurger, addCategory} from "../../../Redux/actions/burgers";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useTypesSelector} from "../../../hooks/useTypesSelector";
import {useAuthActions} from "../../../hooks/useActions";


export const AddBurger = () => {
    console.log('RENDER ADDBURGER')

    const {request} = useRequest()
    const {} = useAuthActions()
    const dispatch = useDispatch()

    const handleActiveOpen = () => {
        dispatch(openAction())
    }

    const categories = useTypesSelector(({burgers}) => {
        return burgers?.categories
    })

    const [activeBut, setActiveBut] = useState(true)
    const [toggle, setToggle] = useState(true)

    const handleActiveBut = () => {
        setToggle(!toggle)
        setActiveBut(!activeBut)
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            price: 0,
            category: '',
            picture: ''

        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            dispatch(addBurger(request, values))
        }
    })

    const formikCat = useFormik({
        initialValues: {
            name: '',
            value: `${categories.length + 1}` as string,


        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            dispatch(addCategory(request, values))
        }
    })


    useEffect(() => {
        setTimeout(() => {
            const elems = document.querySelectorAll("select");
            window.M.FormSelect.init(elems);
            window.M.updateTextFields()

        }, 600)

    }, [toggle, activeBut])


    return (
        <>

            <div className="modalMain__header">
                <div className="modalMain__group">
                    <Button onClick={handleActiveBut}
                            className="button--modalHeader" activeBut={activeBut}>
                        Бургер
                    </Button>

                    <Button onClick={handleActiveBut}
                            className="button--modalHeader" activeBut={!activeBut}>
                        Категорию
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
                    {toggle
                        ? <div className="modalMain__body">
                            <form className="regModal" onSubmit={formik.handleSubmit}>

                                <div className="row">
                                    <h3>Наименование</h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="regModal__input"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                        <label htmlFor="name">Наименование</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <h3>Цена</h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="price"
                                            name="price"
                                            type="number"
                                            className="regModal__input"
                                            onChange={formik.handleChange}
                                            value={formik.values.price}
                                        />
                                        <label htmlFor="price">Цена</label>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="input-field col s12">
                                        <select
                                            id="category"
                                            name="category"
                                            onChange={formik.handleChange}
                                            value={formik.values.category}
                                            className="input__select">
                                            <option className="input__item" value="" disabled selected>Выберите
                                                категорию
                                            </option>
                                            {categories && categories.map(({name, value}) => {
                                                return <option className="input__item" value={value}>{name}</option>
                                            })}

                                        </select>
                                        <label>Выберите категорию товара</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <h3>Ссылка на файл</h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="picture"
                                            name="picture"
                                            type="text"
                                            className="regModal__input"
                                            onChange={formik.handleChange}
                                            value={formik.values.picture}
                                        />
                                        <label htmlFor="picture">Ссылка на файл</label>
                                    </div>
                                </div>

                                <div className="modalMain__footer">

                                    <Button className="button__modalFooter">
                                        <h3>Добавить бургер</h3>
                                    </Button>
                                </div>

                            </form>
                        </div>
                        :
                        <div className="modalMain__body">
                            <form className="regModal" onSubmit={formikCat.handleSubmit}>
                                <div className="row">
                                    <h3>Name of category
                                    </h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="regModal__input"
                                            onChange={formikCat.handleChange}
                                            value={formikCat.values.name}

                                        />
                                        <label htmlFor="name">Название</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <h3>Category number</h3>
                                    <div className="input-field col s12">
                                        <input
                                            id="value"
                                            name="value"
                                            type="text"
                                            className="regModal__input"
                                            onChange={formikCat.handleChange}
                                            value={categories.length + 1}
                                        />
                                        <label htmlFor="value">Номер категории
                                        </label>
                                    </div>
                                </div>

                                <div className="modalMain__footer">

                                    <Button className="button__modalFooter">
                                        <h3>Add category</h3>
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