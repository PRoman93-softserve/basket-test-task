import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {BASKET_PAGE} from "../../accets/constants";
import s from "./mainPage.module.css"
import {GoodsType} from "../../types/ui-types";
import {Input} from "../../accets/Input";

type PropType = {
    addProduct: (name: string, amount: number) => void,
    goods: GoodsType[],
    }
export const MainPage = (props: PropType) => {

    const [amount, setAmount] = useState(1)


    const addSingleProduct = (name: string) => {
        props.addProduct(name, amount)
    }


    const goodsFromData = props.goods.map((el: GoodsType) => <div key={el.id} className={s.goodsWrapper}>
        <div>{el.name}</div>
        <div>{el.price}</div>
        <div><Input setAmount={setAmount}/></div>
        <div>
            <button onClick={() => addSingleProduct(el.name)}>add to card</button>
        </div>
    </div>)

    return (
        <>
            <div>Main Page</div>
            <div className={s.mainPageContentWrapper}>
                {goodsFromData}
                <div>
                </div>
            </div>
            <NavLink to={BASKET_PAGE}>
                <button>go to basket</button>
            </NavLink>
        </>
    )
}
