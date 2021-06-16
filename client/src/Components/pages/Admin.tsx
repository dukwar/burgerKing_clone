import React, {useCallback, useEffect} from "react";
import {useRequest} from "../../hooks/request.hook";
import {Table} from "react-bootstrap";
import Modal from "../componentHelpers/Modal";
import {Button} from "../index";
import {AddBurger} from "../componentHelpers/addingBurgers/AddingBurgers";
import {deleteBurger, getBurgersAll, getCategories} from "../../Redux/actions/burgers";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {useAuthActions, useBurgersActions} from "../../hooks/useActions";



const Admin = () => {
    console.log('RENDER ADMIN')

    const {request} = useRequest()
    const {deleteBurger, getBurgersAll, getCategories} = useBurgersActions()
    const {openAction} = useAuthActions()

    const burgers = useTypesSelector(({burgers}) => {
        return burgers?.burgersAll
    })


    const handleDelete = useCallback((name) => {
      deleteBurger(request, name)
        setTimeout(() => {
           getBurgersAll(request)
        }, 1000)
    }, [request])

    useEffect(() => {
        getCategories(request)
        getBurgersAll(request)
    }, [request])

    const handleActiveOpen = () => {
        openAction()
    }


    return (
        <>
            <div className="admin container offset-s4">


                <Table style={{marginBottom: '50px'}} striped bordered hover>
                    <thead>
                    <tr>
                        <th><p>#</p></th>
                        <th><p>Название</p></th>
                        <th><p>Категория</p></th>
                        <th><p>Цена</p></th>
                        <th><p>Удалить</p></th>
                    </tr>
                    </thead>
                    <tbody>

                    {burgers.map((item, index) => {
                        return <tr>
                            <td><p>{index}</p></td>
                            <td><p>{item.name}</p></td>
                            <td><p>{item.category}</p></td>
                            <td><p>{item.price}₽</p></td>
                            <td>
                                <Button onClick={() => handleDelete({name: item.name})}>
                                    Удалить
                                </Button>

                            </td>
                        </tr>
                    })}
                    </tbody>
                </Table>
                <Button className={"button__modalFooter"} onClick={handleActiveOpen}><h3>Add burger</h3></Button>
            </div>

            <Modal>
                <AddBurger/>
            </Modal>


        </>
    )
}

export default Admin