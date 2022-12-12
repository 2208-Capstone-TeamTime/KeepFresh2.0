import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { selectReceipt, fetchExpProducts, fetchReceipts } from "../reducers/receiptsSlice";
import { addReceipt, deleteItem, changeValue } from "../reducers/receiptsSlice";
import { selectProducts } from "../reducers/productSlice";



const Receipt = () => {
    const receipt = useSelector(selectReceipt);
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchReceipts())
    }, []);

    const fetchExp = (item) => {

        dispatch(fetchExpProducts(item.name))
        navigate('/exp')
    }

    const toggleValue = (item) => {
        dispatch(changeValue(item))
        console.log('state', receipt)
        console.log('changing', product.fridge);
    }


    console.log(receipt);
    return (
        <>
            <div className="receipt">
                <div className="receipt-header">
                    <h2>Receipt</h2>
                </div>
                <div className="receipt-items">
                    {receipt ? receipt.map((item) => (
                        <div key={item.name}>
                            {item.name}
                            {/* <button onClick={deleteItem}>delete</button> */}
                            {/* {console.log("receipt", receipt)}
                            {console.log("product", product)} */}
                            <button onClick={() => {toggleValue(item)}}></button>
                        </div>
                        )
                    
                    ) : ''}
                </div>

                {/* <button>Get All Calendar Notifications</button> */}
                <button onClick={() => receipt.map((item) => fetchExp(item)
                    // createReceipt()
                )}>Calculate Expirations</button>
                <button onClick={addReceipt()}>Add Receipt</button>
            </div>
        </>
    )
}

export default Receipt;