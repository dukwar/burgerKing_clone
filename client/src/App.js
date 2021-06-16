import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom'
import './App.scss';
import {Header} from "./Components";
import {useRoutes} from "./hooks/routes.hook";
import Slider from "./Components/Carousel/Carousel";
import {useAuth} from "./hooks/auth.hook";
import {useDispatch, useSelector} from "react-redux";
import {authAction, checkAuth} from "./Redux/actions/auth";
import Preloader from "./Components/componentHelpers/Preloader/Preloader";
import Footer from "./Components/Footer";
import Message from "./Components/componentHelpers/Message";


function App() {
    // console.log('APP RENDER')

    const location = useLocation()
    const dispatch = useDispatch()
    const {profile, isAuth} = useSelector(({auth}) => auth)
    const [ready, setReady] = useState(false)
    const {login, logout, storageName} = useAuth()
    // const isAuth = !!profile?.token
    const routes = useRoutes(isAuth)

    useEffect(() => {
       if (localStorage.getItem('userData')) {
          dispatch(checkAuth())
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
            {isAuth &&  <Footer />}
           <Message />


        </div>

    );
}

export default App
