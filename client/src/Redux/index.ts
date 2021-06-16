import {combineReducers} from "redux";
import burgers from "./reducers/burgers";
import cart from "./reducers/cart";
import auth from "./reducers/auth";
import work from "./reducers/work";
import message from "./reducers/message";
import user from "./reducers/user";

const rootReducer = combineReducers({
    burgers,
    cart,
    auth,
    work,
    message,
    user
})

export type reducersType = ReturnType<typeof rootReducer>



export default rootReducer