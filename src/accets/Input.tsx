import React from 'react'

export const Input = (props:any) => {


    const onProductMountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        props.setAmount(+e.currentTarget.value)
    }
    return(
        <input type="number"  onChange={onProductMountChange}/>
    )
}