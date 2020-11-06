import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {BASKET_PAGE} from "../../accets/constants";
import s from "./mainPage.module.css"
import {GoodsType} from "../../types/ui-types";

type PropType = {
    addProduct: (name: string, amount: number) => void,
    goods: GoodsType[]
}
export const MainPage = (props: PropType) => {

    const [amount, setAmount] = useState(1)

    const addSingleProduct = (name: string) => {
        console.log(name)
        props.addProduct(name, amount)
    }

    const onProductMountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAmount(+e.currentTarget.value)
    }

    const goodsFromData = props.goods.map((el: GoodsType) => <div key={el.id} className={s.goodsWrapper}>
        <div>{el.name}</div>
        <div>{el.price}</div>
        <div><input type="number" value={amount} onChange={onProductMountChange}/></div>
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
