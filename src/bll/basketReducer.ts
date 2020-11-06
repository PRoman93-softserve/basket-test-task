import {basketApi} from "../dal/api";
import {ADD_PRODUCT, GET_BASKET, GET_GOODS, LOADING_SUCCESS} from "../accets/constants";
import {
    addProductToBasketSuccessType,
    getAllGoodsFromBasketSuccessType,
    getDataFromBasketSuccessType,
    InitialStateType,
    loadingSuccessType
} from "../types/dal-types";
import {BasketType, GoodsType} from "../types/ui-types";
import {AppStateType} from "./store";
import {ThunkDispatch} from "redux-thunk";


const initialState: InitialStateType = {
    goods: [],
    basket: []
}
const basketReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_GOODS: {
            return {
                ...state, goods: action.goods
            }
        }
        case GET_BASKET:
            return {
                ...state, basket: action.data
            }
        case ADD_PRODUCT:
            return {
                ...state, basket: [...state.basket, action.product]
            }
        case LOADING_SUCCESS:
            debugger
            return {
                ...state, loading: action.loading
            }
    }
    return state
}
export default basketReducer


const getAllGoodsFromBasketSuccess = (goods: GoodsType): getAllGoodsFromBasketSuccessType => ({type: GET_GOODS, goods})
const getDataFromBasketSuccess = (data: BasketType): getDataFromBasketSuccessType => ({type: GET_BASKET, data})
const addProductToBasketSuccess = (product: BasketType): addProductToBasketSuccessType => ({type: ADD_PRODUCT, product})
export const loadingSuccess = (loading: boolean): loadingSuccessType => ({type: LOADING_SUCCESS, loading})


type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

type CardsActionType =
    getAllGoodsFromBasketSuccessType
    | getDataFromBasketSuccessType
    | addProductToBasketSuccessType
    | loadingSuccessType


type ActionType = CardsActionType

export const getAllGoods = () => (dispatch: ThunkDispatchType) => {
    basketApi.getGoods().then(data => {
        dispatch(getAllGoodsFromBasketSuccess(data))
    })
}
export const getDataFromBasket = () => (dispatch: ThunkDispatchType) => {
    basketApi.getProducts().then(data => {
        dispatch(getDataFromBasketSuccess(data))
    })
}
export const addProduct = (productName: string, amount: number) => (dispatch: ThunkDispatchType) => {
    dispatch(loadingSuccess(true))
    setTimeout(() => {
        basketApi.addProduct(productName, amount).then(data => {
            dispatch(addProductToBasketSuccess({productName, amount}))
        })
        dispatch(loadingSuccess(false))
    }, 1000)
}