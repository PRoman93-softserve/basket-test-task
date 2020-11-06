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
    const basketContent = props.basket.map((element: BasketType) => <table key={element.id} className={s.singleList}>
            <tr>
                <th>name of product</th>
                <th>amount</th>
                <th>total price</th>
                <th>image</th>
            </tr>
            <tr>
                <td>{element.productName}</td>
                <td>{element.amount}</td>
                <td>${element.productName === 'banana'
                    ? 10 * element.amount : element.productName === 'apple'
                        ? 8 * element.amount : element.productName === 'papaya' && element.amount >= 3
                            ? (element.amount * 10) - ((element.amount / 3) * 0.5 * 10) : element.amount * 10}
                </td>
                <td><img className={s.productImg} src={element.productName === 'apple'
                    ? apple : element.productName === 'banana'
                        ? banana : element.productName === 'papaya'
                            ? papaya : ''}/></td>
            </tr>
        </table>
    )
    return (
        <>
            <h3>Basket page</h3>
            {basketContent}
            <NavLink to={MAIN_PAGE}>
                <button>go to main page</button>
            </NavLink>
        </>
    )
}
export default BasketPage