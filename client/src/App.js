import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom'
import './App.scss';
import {Header} from "./Components";
import {useRoutes} from "./hooks/routes.hook";
import Slider from "./Components/Carousel/Carousel";
import {useAuth} from "./hooks/auth.hook";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "./Redux/actions/auth";
import Preloader from "./Components/componentHelpers/Preloader/Preloader";
import Footer from "./Components/Footer";


function App() {

    let location = useLocation()
    const dispatch = useDispatch()
    const {profile} = useSelector(({auth}) => {
        return {
            profile: auth.profile
        }
    })
    const [ready, setReady] = useState(false)
    const {login, logout, storageName} = useAuth()
    const isAuth = !!profile?.token
    const routes = useRoutes(isAuth)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            dispatch(authAction(data))
            // login(data.token, data.userId)
        }

        setTimeout(() => {
            setReady(true)
        }, 1000)
    }, [login, dispatch, storageName])


    if (!ready) {
        return <Preloader />

    }

    return (
        <div className="wrapper">
            {isAuth &&
        <>
            <Header login={login} logout={logout} />
            {location.pathname === '/home' && <Slider />}

        </>

            }

            <div className="content">
                {routes}
            </div>
            <Footer />
        </div>

    );
}

export default App
