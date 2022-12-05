import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpProducts, selectReceipt } from "../reducers/receiptsSlice";


const Receipt = () => {
    const receipt = useSelector(selectReceipt);

    const exp = fetch()

    const dispatch = useDispatch()

    // async function addReceipt(receipt){
    //     dispatch(addReceipt(receipt))
    // }

    async function addExp(product) {
        dispatch(fetchExpProducts(product))
    }

    console.log(receipt);
    return (
        <>
        <div className="receipt">
            {receipt.map((item) => (
                <div key= {item.name}>{item.name}</div>
            ))}
        <button >Submit</button>
        </div>
        </>
    )
}

export default Receipt