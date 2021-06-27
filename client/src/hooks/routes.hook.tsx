import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Components/pages/Home";
import Cart from "../Components/pages/Cart";
import Auth from "../Components/pages/Auth";
import Admin from "../Components/pages/Admin";
import Work from "../Components/pages/Work";
import Users from "../Components/pages/Users";
import Promotions from "../Components/pages/Promotions";
import KingClub from "../Components/pages/KingClub";
import ScrollToTop from "../Components/componentHelpers/ScrollTopHelper/ScrollToTop";


export const useRoutes = (isAuthenticated:boolean) => {

    if (isAuthenticated) {
        return(
            <>
                <ScrollToTop />
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
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route exact path="/promo">
                        <Promotions />
                    </Route>
                    <Route exact path="/kingclub">
                        <KingClub />
                    </Route>

                    <Redirect to='/home'/>
                </Switch>
            </>
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