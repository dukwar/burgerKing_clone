import {FETCH_USERS} from "../constants";
import {fetchUsersType, IUserApi} from "./types";
import {Dispatch} from "redux";

export const fetchUsers = (users:IUserApi):fetchUsersType => {

    return {
        type: FETCH_USERS,
        payload: users
    }
}

export const fetchApiUsers =
    (request: (url: string, method: string) => Promise<IUserApi>) =>
       async (dispatch:Dispatch<fetchUsersType>) =>  {
            const res = await request(`/api/auth/users`, 'GET')
            dispatch(fetchUsers(res))
}