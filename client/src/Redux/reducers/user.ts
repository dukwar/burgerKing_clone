import {FETCH_USERS} from "../constants";
import {fetchUsersType, IUserApi} from "../actions/types";



const initialState = {
   users: {} as IUserApi
}



type initialStateType = typeof initialState

const user = (state = initialState, action:fetchUsersType):initialStateType => {

    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return state
    }
}

export default user