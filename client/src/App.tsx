import React, {useEffect, useState} from "react"
import {useLocation} from 'react-router-dom'
import './App.scss'
import {useRoutes} from "./hooks/routes.hook"
import {useDispatch} from "react-redux"
import {checkAuth} from "./Redux/actions/auth"
import Preloader from "./Components/componentHelpers/Preloader/Preloader"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Message from "./Components/componentHelpers/Message"
import {useTypesSelector} from "./hooks/useTypesSelector"
import HomeSwiper from "./Components/componentHelpers/HomeSwiper/HomeSwiper"




function App() {

    const location = useLocation()
    const dispatch = useDispatch()
    const {isAuth} = useTypesSelector(({auth}) => auth)
    const isActivate = useTypesSelector(({auth}) => auth.profile?.isActivated)

    const [ready, setReady] = useState(false)

    const routes = useRoutes(isAuth)

    useEffect(() => {
       if (localStorage.getItem('userData')) {
          dispatch(checkAuth())
       }

        setTimeout(() => {
            setReady(true)
        }, 1000)
    }, [])


    if (!ready) {
        return <Preloader />
    }

    return (
        <div className="wrapper">
            {isAuth &&
        <>
            <Header />
            {location.pathname === '/home' && <HomeSwiper />}
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
