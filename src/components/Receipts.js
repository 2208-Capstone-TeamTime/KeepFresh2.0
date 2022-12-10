import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { selectReceipt, fetchExpProducts, fetchReceipts } from "../reducers/receiptsSlice";
import { addReceipt, deleteItem } from "../reducers/receiptsSlice";



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

    console.log(receipt);
    return (
        <>
            <div className="receipt">
                <div className="receipt-header">
                    <h2>Receipt</h2>
                </div>
                <div className="receipt-items">
                    {receipt? receipt.map((item) => (
                        <div key={item.name}>
                            {item.name}
                            {/* <button onClick={deleteItem}>delete</button>

                            <input type="radio" id={item.name}
                                name='fridge' checked />
                            <label for={item.name}>fridge</label>

                            <input type="radio" id={item.name}
                                name='freezer' />
                            <label for={item.name}>freezer</label> */}
                        </div>)
                    ): ''}</div>

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