import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Components/pages/Home";
import Cart from "../Components/pages/Cart";
import Auth from "../Components/pages/Auth";
import Admin from "../Components/pages/Admin";
import Work from "../Components/pages/Work";


export const useRoutes = (isAuthenticated) => {

    if (isAuthenticated) {
        return(
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route exact path="/work">
                    <Work />
                </Route>
                <Redirect to='/home'/>
            </Switch>

        )
    }

    return (
        <Switch>
            <Route path='/' exact>
                <Auth />
            </Route>
            <Redirect to='/'/>
        </Switch>
    )






}