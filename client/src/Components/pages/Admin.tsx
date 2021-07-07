import React, {useCallback, useEffect, useState} from "react";
import {useRequest} from "../../hooks/request.hook";
import Modal from "../componentHelpers/Modal";
import {AddBurger} from "../componentHelpers/addBurger/AddBurger";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {useAuthActions, useBurgersActions} from "../../hooks/useActions";
import AdminDesk from "../Admin/AdminDesk";
import AdminMobile from "../Admin/AdminMobile";


const Admin = () => {

    const {request} = useRequest()
    const {deleteBurger, getBurgersAll, getCategories} = useBurgersActions()
    const {openAction} = useAuthActions()
    const [mobileSize, setSize] = useState(false)

    const burgers = useTypesSelector(({burgers}) => {
        return burgers?.burgersAll
    })


    const handleDelete = useCallback((name) => {
        deleteBurger(request, name)
        setTimeout(() => {
            getBurgersAll(request)
        }, 1000)
    }, [request])

    const handleResize = () => {
        if (document.documentElement.clientWidth < 768) {
            setSize(true)
        } else {
            setSize(false)
        }
    }

    useEffect(() => {
        getCategories(request)
        getBurgersAll(request)
    }, [request])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return function () {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleActiveOpen = () => {
        openAction()
    }


    return (
        <>
            {mobileSize ?
                <AdminMobile
                    burgers={burgers}
                    handleDelete={handleDelete}
                    handleActiveOpen={handleActiveOpen} />
                :
                <AdminDesk
                    burgers={burgers}
                    handleDelete={handleDelete}
                    handleActiveOpen={handleActiveOpen}
                />
            }
            <Modal>
                <AddBurger/>
            </Modal>
        </>
    )
}

export default Admin