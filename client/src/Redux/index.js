import {combineReducers} from "redux";
import burgers from "./reducers/burgers";
import cart from "./reducers/cart";
import auth from "./reducers/auth";
import work from "./reducers/work";
import message from "./reducers/message";

const rootReducer = combineReducers({
    burgers,
    cart,
    auth,
    work,
    message
})


export default rootReducer