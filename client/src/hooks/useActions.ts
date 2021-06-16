import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActionCreators from "../Redux/actions/auth"
import * as workActionCreators from "../Redux/actions/work"
import * as burgersActionCreators from "../Redux/actions/burgers"
import * as cartActionCreators from "../Redux/actions/cart"
import * as messageActionCreators from "../Redux/actions/message"
import * as usersActionCreators from "../Redux/actions/user"







export const useAuthActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(authActionCreators, dispatch)
}

export const useWorkActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(workActionCreators, dispatch)
}

export const useBurgersActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(burgersActionCreators, dispatch)
}

export const useCartActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(cartActionCreators, dispatch)
}

export const useMessageActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(messageActionCreators, dispatch)
}

export const useUsersActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(usersActionCreators, dispatch)
}


