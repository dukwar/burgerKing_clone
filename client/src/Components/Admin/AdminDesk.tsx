import React from "react";
import {Table} from "react-bootstrap";
import Button from "../Button";
import {burgerApiType} from "../../Redux/reducers/types";

interface AdminDeskType {
    burgers: burgerApiType[],
    handleDelete: (name: string) => void,
    handleActiveOpen: () => void
}

const AdminDesk = ({burgers, handleActiveOpen, handleDelete }:AdminDeskType) => {
    return (
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

                {burgers.map(({name, category, price}, index) => {
                    return <tr>
                        <td><p>{index}</p></td>
                        <td><p>{name}</p></td>
                        <td><p>{category}</p></td>
                        <td><p>{price}₽</p></td>
                        <td>
                            <Button onClick={() => handleDelete(name)}>
                                Удалить
                            </Button>

                        </td>
                    </tr>
                })}
                </tbody>
            </Table>
            <Button className={"button__modalFooter"} onClick={handleActiveOpen}><h3>Add burger</h3></Button>
        </div>
    )
}

export default AdminDesk