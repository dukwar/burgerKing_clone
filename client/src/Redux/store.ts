import {compose, createStore, applyMiddleware} from "redux";
import rootReducer from "./index";
import thunk from 'redux-thunk';



const composeEnhancers =

    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const configureStore = (preloadedState:any) => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(thunk)),
    )
);



const store = configureStore({})

export default store