import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Preloader  from '../../accets/Preloader';
import {addProduct, getAllGoods, loadingSuccess} from '../../bll/basketReducer';
import {MainPage} from "./mainPage";

export const MainPageContainer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadingSuccess(true))
        setTimeout(() => {
            dispatch(getAllGoods())
            dispatch(loadingSuccess(false))
        }, 1000)
    }, [])
    const addProductToBasket = (productName: string, amount: number = 1) => {
        dispatch(loadingSuccess(true))
        setTimeout(() => {
            dispatch(addProduct(productName, amount))
            dispatch(loadingSuccess(false))
        }, 1000)

    }
    const goods = useSelector((state: any) => state.reducer.goods)
    const loading = useSelector((state: any) => state.reducer.loading)
    return (
        <>
            {loading ? <Preloader/> : <MainPage goods={goods} addProduct={addProductToBasket}/>}
        </>
    )
}