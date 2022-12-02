import React, {useState} from "react";
import { useSelector } from "react-redux";
import { selectReceipt } from "../reducers/receiptsSlice";
import Products from "./Products";

const Receipt = () => {
    const receipt =useSelector(selectReceipt);

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