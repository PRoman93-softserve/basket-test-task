import {BasketType, GoodsType} from "./ui-types";
import {ADD_PRODUCT, GET_BASKET, GET_GOODS, LOADING_SUCCESS} from "../accets/constants";


export type InitialStateType = {
    goods:GoodsType[],
    basket:BasketType[]
}
export type getAllGoodsFromBasketSuccessType = {
    type: typeof GET_GOODS
    goods: GoodsType
}
export type getDataFromBasketSuccessType = {
    type: typeof GET_BASKET
    data: BasketType
}
export type addProductToBasketSuccessType = {
    type: typeof ADD_PRODUCT
    product: BasketType
}
export type loadingSuccessType = {
    type: typeof LOADING_SUCCESS
    loading: boolean
}