import React, {useEffect} from "react";
import {useRequest} from "../../hooks/request.hook";
import {Table} from "react-bootstrap";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {useUsersActions} from "../../hooks/useActions";
import {fetchApiUsers} from "../../Redux/actions/user";



const Users = () => {

    const {request} = useRequest()
    const {fetchApiUsers} = useUsersActions()

    const users = useTypesSelector(({user}) => {
        return user.users
    })

    useEffect(() => {
      fetchApiUsers(request)
    }, [])


    return (
        <>
            <div className="admin container offset-s4">

                <Table style={{marginBottom: '50px'}} striped bordered hover>
                    <thead>
                    <tr>
                        <th><p>#</p></th>
                        <th><p>Почта</p></th>
                        <th><p>id</p></th>
                    </tr>
                    </thead>
                    <tbody>

                    {users && users.map((item, index) => {
                        return <tr>
                            <td><p>{index}</p></td>
                            <td><p>{item.email}</p></td>
                            <td><p>{item._id}</p></td>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Users