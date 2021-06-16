import {FETCH_USERS} from "../constants";
import {fetchUsersType, IUser} from "./types";
import {Dispatch} from "redux";

export const fetchUsers = (users:IUser[]):fetchUsersType => {

    return {
        type: FETCH_USERS,
        payload: users
    }
}

export const fetchApiUsers =
    (request: (url: string, method: string) => Promise<IUser[]>) =>
       async (dispatch:Dispatch<fetchUsersType>) =>  {
            const res = await request(`/api/auth/users`, 'GET')
            dispatch(fetchUsers(res))
}