import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import BasketPage from "./basketPage";
import {getDataFromBasket, loadingSuccess} from "../../bll/basketReducer";
import {Preloader} from "../../accets/Preloader";

export const BasketPageContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadingSuccess(true))
        setTimeout(() => {
            dispatch(getDataFromBasket())
            dispatch(loadingSuccess(false))
        }, 1000)
    }, [])
    const basket = useSelector((state: any) => state.reducer.basket)
    const loading = useSelector((state: any) => state.reducer.loading)
    return (
        <>
            {loading ? <Preloader/> : <BasketPage basket={basket}/>}
        </>
    )
}