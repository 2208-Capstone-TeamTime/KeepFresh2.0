import React from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { selectReceipt, fetchExpProducts } from "../reducers/receiptsSlice";
import changeProperty,{ deleteItem} from "../reducers/receiptsSlice";



const Receipt = () => {
    const receipt = useSelector(selectReceipt);
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

  

    const fetchExp = (item) => {
        dispatch(fetchExpProducts(item.name))
        navigate('/exp')
    }

    const del = (item) => dispatch(deleteItem(item))

    // const changePropertyValueFridge = (name) => {
    //     // document.getElementById(`${item.name}Fridge`).checked = true
    //     // document.getElementById(`${item.name}Freezer`).checked = false
    //     // item.fridge = !(item.fridge);
    //     const dispatch(changeProperty(name));
    //     console.log(item.fridge)
    //     return item
    // }

    const toggleValue = (item) => {
        dispatch(changeValue(item))
        console.log('state', receipt)
        console.log('changing', product.fridge);
    }


    // console.log(receipt);
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
                            <div><button onClick={()=>{del(item)}}>-</button></div>
                        </div>)
                    ): ''}
                </div>
                        <div>
                            {/* <button onClick={deleteItem}>delete</button> */}
                            {/* {console.log("receipt", receipt)}
                            {console.log("product", product)} */}
                            {/* <button onClick={() => {toggleValue(item)}}></button> */}
                        </div>
                    
            </div>
            <div>

              
                <button onClick={() => receipt.map((item) => fetchExp(item)
                    
                )}>Calculate Expirations</button>
         
            </div>
        </>
    )
}

export default Receipt;