import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectReceipt } from "../reducers/receiptsSlice";
import Expirations from "./Expirations";


const Receipt = () => {
     const receipt = useSelector(selectReceipt);

    console.log(receipt);
    return (
        <>
            <div className="receipt">
                <div className="receipt-header">
                    <h2>Receipt</h2>
                </div>
                <div className="receipt-items">
                    {receipt.map((item) => (
                        <div key={item.name}>{item.name}</div>)

                    )}</div>
                <Link to='' element={<Expirations/>}>
                    <button >Submit</button>
                </Link>
            </div>
        </>
    )
}

export default Receipt