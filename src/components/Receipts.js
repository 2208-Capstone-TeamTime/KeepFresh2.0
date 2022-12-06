import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { selectReceipt, fetchExpProducts } from "../reducers/receiptsSlice";
import Expirations from "./Expirations";


const Receipt = () => {
    const receipt = useSelector(selectReceipt);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchExp = (item) => {

        dispatch(fetchExpProducts(item.name))
        navigate('/exp')
    }

    console.log(receipt);
    return (
        <>
            <div className="receipt">
                <div className="receipt-header">
                    <h2>Receipt</h2>
                </div>
                <div className="receipt-items">
                    {receipt.map((item) => (
                        <div key={item.name}>
                            {item.name}
                            <button>delete</button>

                            {/* <input type="radio" id={item.name}
                                name='fridge' checked />
                            <label for={item.name}>fridge</label>

                            <input type="radio" id={item.name}
                                name='freezer' />
                            <label for={item.name}>freezer</label> */}
                        </div>)

                    )}</div>

                <button>Get All Calendar Notifications</button>
                <button onClick={() => receipt.map((item) => fetchExp(item)
                )}>Calculate Expirations</button>

            </div>
        </>
    )
}

export default Receipt