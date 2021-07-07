import React, {useEffect} from "react";
import {useRequest} from "../../hooks/request.hook";
import {Table} from "react-bootstrap";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {useUsersActions} from "../../hooks/useActions";



const Users = () => {

    const {request} = useRequest()
    const {fetchApiUsers} = useUsersActions()

    const users = useTypesSelector(({user}) => {
        return user.users.users
    })

    useEffect(() => {
      fetchApiUsers(request)
    }, [request])


    return (
        <>
            <div className="admin container offset-s4">

                <Table style={{marginBottom: '50px'}} striped bordered hover>
                    <thead>
                    <tr>
                        <th><p>#</p></th>
                        <th><p>Почта</p></th>
                    </tr>
                    </thead>
                    <tbody>

                    {users && users.map((item, index) => {
                        return <tr key={`user-${index}`}>
                            <td><p>{index}</p></td>
                            <td><p>{item.email}</p></td>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Users