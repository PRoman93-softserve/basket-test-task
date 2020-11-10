import React from "react"
import {NavLink} from "react-router-dom"
import {MAIN_PAGE} from "../../accets/constants";
import s from "./basketPage.module.css";
import apple from "../../common/apple.jpeg"
import banana from "../../common/banana.jpg"
import papaya from "../../common/papaya.jpg"
import {BasketType} from "../../types/ui-types";

type PropType = {
    basket: BasketType[]
}
const BasketPage = (props: PropType) => {

    const isPapayaCount = props.basket
        .filter(el => el.productName === 'papaya')
        .reduce((acc: any, el: any) => acc + Number(el.amount), 0)

    const sortBasket = props.basket.sort((a: any, b: any) => a.productName > b.productName ? 1 : -1)
    const basketContent = sortBasket.map((element: BasketType) =>
        <tr key={element.id}>
            <td>{element.productName}</td>
            <td>{element.amount}</td>
            <td>${element.productName === 'banana'
                ? 10 * element.amount : element.productName === 'apple'
                    ? 8 * element.amount : element.productName === 'papaya' && isPapayaCount >= 3
                        ? Math.ceil((element.amount * 2) / 3) * 10 + Math.floor((element.amount * 1) / 3) * 5 : element.amount * 10}
            </td>
            <td><img className={s.productImg} src={element.productName === 'apple'
                ? apple : element.productName === 'banana'
                    ? banana : element.productName === 'papaya'
                        ? papaya : ''}/></td>
        </tr>
    )
    return (
        <>
            <h3>Basket page</h3>
            <table className={s.singleList}>
                <tr>
                    <th>name of product</th>
                    <th>amount</th>
                    <th>total price</th>
                    <th>image</th>
                </tr>
                {basketContent}
            </table>
            <NavLink to={MAIN_PAGE}>
                <button>go to main page</button>
            </NavLink>
        </>
    )
}
export default BasketPage