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
        <div className="receipt-header">
            <h2>Receipt</h2>
            </div> 
        <div className="receipt-items"> 
            {receipt.map((item) => (
                <div key= {item.name}>{item.name}</div> )
                //if item.q = 1  , add quantity to div
                
            )}</div>
        <button >Submit</button>
        </div>
        </>
    )
}

export default Receipt