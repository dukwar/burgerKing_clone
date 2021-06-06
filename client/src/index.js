import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "materialize-css"
import  './scss/app.scss'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/store";


ReactDOM.render(

        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);
