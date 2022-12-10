import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { selectReceipt, fetchExpProducts, fetchReceipts } from "../reducers/receiptsSlice";
import { addReceipt, deleteItem } from "../reducers/receiptsSlice";
import Expirations from "./Expirations";


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

    const changePropertyValueFridge = (item) => {
        document.getElementById("fridge").checked = true
        document.getElementById("freezer").checked = false
        item.fridge = true
        console.log(item.fridge)
        return item
    }

    const changePropertyValueFreezer = (item) => {
        document.getElementById("fridge").checked = false
        document.getElementById("freezer").checked = true
        item.fridge = false
        console.log(item.fridge)
        return item

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
                            {/* <button onClick={deleteItem}>delete</button> */}
                            <input type="checkbox" id="fridge"
                                name='fridge' value={item.fridge} onClick={(item) => {
                                    changePropertyValueFridge(item)
                                    console.log("update", receipt)
                                    }
                                }/>
                            <label for={item.name}>fridge</label>

                            <input type="checkbox" id="freezer"
                                name='freezer' value={item.fridge} onClick={(item) => {
                                    changePropertyValueFreezer(item)
                                    console.log("update", receipt)
                                    }
                                }/>
                            <label for={item.name}>freezer</label>
                        </div>)
                )}</div>


                <button>Get All Calendar Notifications</button>
                <button onClick={() => receipt.map((item) => {
                    // const copy = {...item}
                    // copy.fridge = true
                    fetchExp(item)                    
                }

                // createReceipt()
                )}>Calculate Expirations</button>
                <button onClick={addReceipt()}>Add Receipt</button>
            </div>
        </>
    )
}

export default Receipt;